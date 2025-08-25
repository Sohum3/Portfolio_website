Sohum's Personal Portfolio Website

Welcome to the repository for my personal portfolio! This project isn't just a website; it's a digital resume, a showcase of my work, and a reflection of my passion for web development. I built it to be clean, modern, and fully responsive, providing a seamless experience whether you're on a phone, tablet, or desktop.

This guide is written to help anyone, especially a student just starting out, understand how this site was built and how you can create your own version using this code.
✨ Live Demo

Check out the live version of the website here:

https://sohums-portfolio-website.vercel.app/
🚀 Core Features

    Modern & Clean UI: A minimalist design that focuses on content and user experience.

    Fully Responsive: The layout perfectly adapts to any screen size.

    Interactive Elements: Smooth scrolling, subtle animations, and hover effects create a dynamic feel.

    Project Showcase: A dedicated section to display my key projects with descriptions, technologies used, and direct links.

    Live Spotify Integration: A fun, real-time feature that shows what song I'm currently listening to on Spotify!

    Functional Contact Form: An integrated form for easy communication.

    Direct Resume Download: A prominent button to download my latest resume.

🛠️ Technology Stack Explained

If you're new to web development, here’s a simple breakdown of the technologies used in this project and what they do:

    HTML5 (The Skeleton): This is the backbone of the website. It provides the basic structure and content, like headings, paragraphs, and images.

        In this project: Used to lay out all the sections like "About Me," "Projects," and "Contact."

    CSS3 (The Clothes & Style): This is the code that makes the website look good. It controls the colors, fonts, spacing, and overall visual design.

        In this project: Used for all the custom styling, from the color scheme to the responsive layout that adjusts for mobile screens.

    JavaScript (The Brains): This brings the website to life. It handles interactivity, animations, and any dynamic actions.

        In this project: Used for the smooth scrolling, the "scroll to top" button, and fetching data from the Spotify API.

    Bootstrap (The LEGO Set): A pre-built framework for CSS and JavaScript. It provides ready-to-use components (like grids and buttons) that help build responsive websites much faster.

        In this project: Used for its powerful grid system to ensure everything aligns perfectly on different devices.

    jQuery (The JavaScript Assistant): A library that simplifies writing common JavaScript tasks. It makes it easier to manipulate HTML elements, handle user clicks, and create animations.

        In this project: Used to help with smooth scrolling and other interactive DOM elements.

    Spotify API (The Music Connector): This is an "Application Programming Interface" provided by Spotify. It allows our website to securely communicate with Spotify's servers to request information, like the currently playing song.

        In this project: Used to power the "Now Playing" feature in the footer.

🔧 How to Build Your Own Version (A Step-by-Step Guide)

Want to build a similar portfolio for yourself? Follow these steps!
Step 1: Get the Code

First, you need to get a copy of the project on your own GitHub account and then on your computer.

    Fork the Repository: Click the "Fork" button at the top-right of this page. This creates a complete copy of the project under your GitHub account.

    Clone Your Fork: Open your terminal or command prompt and run the following command (replace YOUR-USERNAME with your GitHub username):

    git clone https://github.com/YOUR-USERNAME/Portfolio_website.git

    Navigate into the directory:

    cd Portfolio_website

Step 2: Customize the Content

Now you can start personalizing the website.

    Open index.html: This is the main file. Open it in a code editor like VS Code.

    Change the Text: Go through the file and replace my name, bio, project descriptions, and other text with your own information.

    Update Links: Change the links in the navigation bar, project section, and footer to point to your own projects and social media profiles.

    Add Your Resume: Place your resume file (e.g., YourName_Resume.pdf) in the main folder and update the download link in the index.html file.

Step 3: Set Up the Spotify "Now Playing" API (The Cool Part!)

This feature requires a bit more setup, as you need to get permission from Spotify to access your listening data. The code in the api/spotify.js file is designed to run on a serverless platform like Vercel or Netlify to keep your secret keys safe.

    Go to the Spotify Developer Dashboard:

        Log in with your Spotify account here: https://developer.spotify.com/dashboard/

    Create an App:

        Click "Create an App". Give it a name and description.

        Once created, you will see your Client ID and you can click "Show client secret" to see your Client Secret. Copy these two values and save them somewhere safe.

    Get Your Refresh Token:

        The API needs a refresh_token to generate new access tokens without you having to log in every time. Getting this is a one-time process.

        Follow a guide like this one by filip.rocks to generate your refresh token. It will be a long string of characters. Copy this and save it.

    Deploy on Vercel:

        Sign up for a free account at Vercel.

        Create a "New Project" and import your forked repository from GitHub.

        In the project settings, navigate to "Environment Variables" and add the following three secrets:

            SPOTIFY_CLIENT_ID (value is your Client ID)

            SPOTIFY_CLIENT_SECRET (value is your Client Secret)

            SPOTIFY_REFRESH_TOKEN (value is your Refresh Token)

        Deploy the project! Vercel will automatically detect the api/spotify.js file and set it up as a serverless function. Your live site will now have a working "Now Playing" feature.

📬 Get In Touch

I'm always open to connecting, collaborating, or discussing new opportunities. Feel free to reach out!

    LinkedIn: https://www.linkedin.com/in/sohum2001/

    GitHub: @Sohum3

    Email: sohumwork2001@gmail.com
