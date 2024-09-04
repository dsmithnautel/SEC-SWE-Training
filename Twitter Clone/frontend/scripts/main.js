window.addEventListener('DOMContentLoaded', loadPosts);

document.getElementById('post-btn').addEventListener('click', async () => {
    const content = document.getElementById('post-content').value;
    const username = document.getElementById('user-name').value || 'Guest';

    if (content.length > 0 && content.length <= 280) {
        await fetch('http://localhost:3500/tweet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                tweet: content
            })
        });
        location.reload();
    }
});

document.getElementById('post-content').addEventListener('input', () => {
    const counter = document.getElementById('character-counter');
    const content = document.getElementById('post-content').value;
    const button = document.getElementById('post-btn');
    counter.textContent = `${content.length}/280`;

    if (content.length > 280) {
        counter.style.color = 'red';
        button.style.opacity = 0.6;
    } else {
        counter.style.color = '#555';
        button.style.opacity = content.length > 0 ? 1 : 0.6;
    }
});

document.getElementById('post-content').addEventListener('input', () => {
    const textArea = document.getElementById('post-content');
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
});

async function loadPosts() {
    try {
        const response = await fetch('http://localhost:3500/tweet');
        const tweets = await response.json();
        
        const feed = document.querySelector('.posts-feed');
        tweets.reverse().forEach(tweet => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-item');
            
            const userDiv = document.createElement('div');
            userDiv.classList.add('post-user');
            userDiv.textContent = tweet.username;
            
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('post-content');
            contentDiv.textContent = tweet.tweet;
            
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('post-date');
            dateDiv.textContent = tweet.date;
            
            postDiv.appendChild(userDiv);
            postDiv.appendChild(contentDiv);
            postDiv.appendChild(dateDiv);
            
            feed.insertBefore(postDiv, document.getElementById('feed-bottom'));
        });
    } catch (error) {
        console.error('Failed to load posts:', error);
    }
}
