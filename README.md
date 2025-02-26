 Quotes & Jokes Extension
A simple browser extension that fetches motivational quotes and funny jokes at the click of a button!

##Features
Motivational Quotes: Get a random inspiring quote.
Funny Jokes: Lighten up with a random joke.
Clean and user-friendly interface.
Fast and responsive button actions.
Preview

##Installation
Clone or download the repository.
Open your browser and go to chrome://extensions/.
Enable Developer mode (top right corner).
Click Load unpacked and select the project folder.
Enjoy fetching new quotes and jokes!
##Usage
Click the New Quote button to display a fresh motivational quote.
Click the New Joke button for a random joke.
##Project Structure
bash
`
├── manifest.json       # Extension configuration
├── popup.html          # Extension UI
├── popup.js            # Fetches quotes and jokes
├── styles.css          # Styling for the popup
└── README.md           # Project documentation
`
##APIs Used
Quotes: [API Name or Link https://api.allorigins.win/get?url=https://zenquotes.io/api/random&cachebuster=${new Date().getTime()}]
Jokes: [API Name or Link ([https://icanhazdadjoke.com/slack]
##License
MIT License
