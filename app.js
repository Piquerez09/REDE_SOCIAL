// app.js
async function createPost() {
    const content = document.getElementById('postContent').value;
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
    });
    const result = await response.json();
    alert(result.message);
}
