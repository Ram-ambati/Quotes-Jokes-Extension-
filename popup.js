document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quoteButton').addEventListener('click', fetchQuote);
    document.getElementById('jokeButton').addEventListener('click', fetchJoke);
});

async function fetchQuote() {
    try {
        console.log("Fetching a new quote..."); // Debugging line
        const response = await fetch(`https://api.allorigins.win/get?url=https://zenquotes.io/api/random&cachebuster=${new Date().getTime()}`);
        
        console.log("Response received:", response); // Debugging line

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data); // Debugging line

        const quoteData = JSON.parse(data.contents);
        const quote = quoteData[0].q;
        const author = quoteData[0].a;

        document.getElementById('quote').textContent = quote;
        document.getElementById('author').textContent = "- " + author;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        document.getElementById('quote').textContent = "Failed to fetch quote. Please try again.";
        document.getElementById('author').textContent = "";
    }
}

async function fetchJoke() {
    try {
        console.log("Fetching a new joke..."); // Debugging line
        const response = await fetch(`https://icanhazdadjoke.com/slack`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        
        console.log("Response received:", response); // Debugging line

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data); // Debugging line

        const joke = data.attachments[0].text;

        document.getElementById('joke').textContent = joke;
    } catch (error) {
        console.error('Error fetching the joke:', error);
        document.getElementById('joke').textContent = "Failed to fetch joke. Please try again.";
    }
}
