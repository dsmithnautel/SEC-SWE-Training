window.addEventListener('DOMContentLoaded', loadPosts);

document.getElementById('postBtn').addEventListener('click', async () => {
    const content = document.getElementById('postContent').value;
    const userName = document.getElementById('userName').value || 'Guest';

    if (content.length > 0 && content.length <= 280) {
        await fetch('http://localhost:3500/tweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                tweet: content
            })
        });
        location.reload();
    }
});

document.getElementById('postContent').addEventListener('input', () => {
    const counter = document.getElementById('characterCounter');
    const content = document.getElementById('postContent').value;
    const button = document.getElementById('postBtn');
    counter.textContent = `${content.length}/280`;

    if (content.length > 280) {
        counter.style.color = 'red';
        button.style.opacity = 0.6;
    } else {
        counter.style.color = '#555';
        button.style.opacity = content.length > 0 ? 1 : 0.6;
    }
});

document.getElementById('postContent').addEventListener('input', () => {
    const textArea = document.getElementById('postContent');
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
});

async function loadPosts() {
    try {
        const response = await fetch('http://localhost:3500/tweet');
        const tweets = await response.json();
        
        const feed = document.querySelector('.postsFeed');
        tweets.reverse().forEach(tweet => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('postItem');
            
            const userDiv = document.createElement('div');
            userDiv.classList.add('postUser');
            userDiv.textContent = tweet.username;
            
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('postContent');
            contentDiv.textContent = tweet.tweet;
            
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('postDate');
            dateDiv.textContent = tweet.date;
            
            postDiv.appendChild(userDiv);
            postDiv.appendChild(contentDiv);
            postDiv.appendChild(dateDiv);
            
            feed.insertBefore(postDiv, document.getElementById('feedBottom'));
        });
    } catch (error) {
        console.error('Failed to load posts:', error);
    }
}
