const Tweeter = function() {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    
    const postIdCounter = 3

    const commentIdCounter = 7

    const getPosts = function() {
        return _posts
    }


    const addPost = function(text) {
        let ID = postIdCounter
        let posts = {text: text, id: "p"+ID++, comments:[]}
        _posts.push(posts)
    }


    const removePost = function(postID) {
        for (let post of _posts) { 
        if (_posts.id === postID) {
            _posts.splice(post.id,1)
        }}

    }


    const addComment = function(postID, text) {
        let cmmtId = commentIdCounter
        let comment = {id: "c"+cmmtId++, text:text}
        for (let post of _posts) {
            if (post.id === postID) {
                _posts.comments.push(comment)
            }
        }
        
    }

    const removeComment = function(postID, commentID) {
        for (let post of _posts) {
            if (post.id === postID) {
                post.comments.splice(commentID, 1)
            }
        }
    }


    return {
        comment: commentIdCounter,
        get: getPosts,
        add: addPost,
        remove: removePost,
        addC: addComment,
        removeC: removeComment
    }

}


const tweet = Tweeter()

tweet.add("This is my own post!")
console.log(tweet.get())


tweet.addC("Damn straight it is!", "p3")
tweet.addC("Second the best!", "p2")
console.log(tweet.get())


tweet.addC("Damn straight it is!", "p3")
tweet.addC("Second the best!", "p2")
console.log(tweet.get())


tweet.removeC("p2", "c6")
console.log(tweet.get())
