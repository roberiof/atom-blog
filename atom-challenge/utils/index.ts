import { MessageType } from "@/types"

export const api = 'http://localhost:3000'

export const getAllPostsAPI = async() =>{
    const response = await fetch(`${api}/posts`).then(data => data.json())
    return response
}

export const PostMessageAPi = async(message : MessageType) =>{
    const response = await fetch(`${api}/messages` ,{
        method: "POST", 
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
    })
}