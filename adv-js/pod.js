const getUserDetails = (data, callback) => {
    setTimeout(() => {
        callback()
    }, 1000)
}

const getPosts = (id, callback) => {
    setTimeout(() => {
        callback()
    }, 1000)
}

const getComments = (postId, callback) => {
    setTimeout(() => {
        callback()
    }, 1000)
}

getUserDetails(data, (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
        getPosts(1, function (err, posts) {
            if (err) {
                console.log(err)
            }
            else {
                console.log(posts)
                getComments(posts[0], function (err, comments) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(comments)
                    }
                })
            }
        })
    }
})

getUserDetails(data)
.then(user => {
    console.log(user)
    return getPosts(user.id)
})
.then(posts => {
    console.log(posts)
    return getComments(posts.id)
})
.then(comments => {
    console.log(comments)
})
.catch(err => console.error(err))