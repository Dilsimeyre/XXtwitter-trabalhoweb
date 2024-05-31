document.getElementById('postTweetBtn').addEventListener('click', function() {
    let tweetText = document.getElementById('tweetInput').value;
    if (tweetText) {
        let tweetContainer = document.createElement('div');
        tweetContainer.className = 'tweet';

        let tweetContent = document.createElement('p');
        tweetContent.textContent = tweetText;
        tweetContainer.appendChild(tweetContent);

        let likeBtn = document.createElement('button');
        likeBtn.className = 'btn btn-sm btn-outline-primary m-1';
        likeBtn.textContent = 'Curtir';
        likeBtn.addEventListener('click', function() {
            likeBtn.textContent = 'Descurtir';
            likeBtn.classList.toggle('btn-outline-primary m-1');
            likeBtn.classList.toggle('btn-primary');
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-sm btn-outline-danger m-1';
        deleteBtn.textContent = 'Deletar';
        deleteBtn.addEventListener('click', function() {
            tweetContainer.remove();
        });

        let tweetActions = document.createElement('div');
        tweetActions.className = 'tweet-actions';
        tweetActions.appendChild(likeBtn);
        tweetActions.appendChild(deleteBtn);

        tweetContainer.appendChild(tweetActions);
        
        document.getElementById('tweetsContainer').prepend(tweetContainer);
        
        document.getElementById('tweetInput').value = '';
    }
});