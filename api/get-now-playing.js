// api/get-now-playing.js

// This line imports the 'node-fetch' library, which allows our serverless function to make HTTP requests.
// Vercel will automatically install this for us because we listed it in the package.json file.
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

// These lines securely access the secret keys (Environment Variables) that you will set in your Vercel project settings.
// Using process.env is the standard way to handle secrets on a server.
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

// This creates a Base64 encoded string of your client ID and secret, which is required by the Spotify API for authentication.
const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

// These are the specific URLs for Spotify's API endpoints that we need to interact with.
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

// This is the main serverless function that Vercel will execute whenever a request is made to /api/get-now-playing.
module.exports = async (req, res) => {
  try {
    // Step 1: Use the permanent Refresh Token to get a new, temporary Access Token.
    // Access Tokens expire every hour, so we must get a new one for each request.
    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const { access_token } = await tokenResponse.json();

    // Step 2: Use the new Access Token to ask Spotify for the currently playing song.
    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // If nothing is playing, Spotify sends back a 204 No Content status. We handle this gracefully.
    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    // Step 3: Parse the song data from Spotify's response.
    const songData = await nowPlayingResponse.json();
    
    // Step 4: Extract only the specific details we need to display on the website.
    const isPlaying = songData.is_playing;
    const title = songData.item.name;
    const artist = songData.item.artists.map((_artist) => _artist.name).join(', ');
    const album = songData.item.album.name;
    const albumImageUrl = songData.item.album.images[0].url;
    const songUrl = songData.item.external_urls.spotify;

    // Set caching headers to prevent hitting the API too often.
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    
    // Step 5: Send the clean data back to the frontend website.
    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });

  } catch (error) {
    // If anything goes wrong, log the error on the server and send back a generic error message.
    console.error('Error fetching from Spotify:', error);
    return res.status(500).json({ error: 'Something went wrong.' });
  }
};
