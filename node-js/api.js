async function get(url) {
    return await fetch(url)
}

async function post(url, body) {
    return await fetch(url, JSON.stringify(body))
}

async function put(url, body) {
    return await fetch(url, JSON.stringify(body))
}

async function deleteApi(url, body) {
    return await fetch(url, JSON.stringify(body))
}

module.exports = {
    get,
    post,
    put,
    deleteApi
}