export const api = 'http://localhost:3000'

export const getAllPostsAPI = async() =>{
    const response = await fetch(`${api}/posts`).then(data => data.json())
    return response
}