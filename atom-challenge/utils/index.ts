import { MessageType } from "@/types"

export const api = 'https://my-json-server.typicode.com/roberiof/atom-blog/blob/main'

export const getAllPostsAPI = async() =>{
    try{
        const response = await fetch(`${api}/posts`).then(data => data.json())
        return response
    } catch(error){
        console.log(error)
        return 'error'
    }
}

export const PostMessageAPi = async(message : MessageType) =>{
    try{
        const response =   await fetch(`${api}/messages` ,{
            method: "POST", 
            body: JSON.stringify(message),
            headers: {
              "Content-Type": "application/json",
            },
        })
        return response
    } catch(error){
        console.log(error)
        return 'error'
    }
  
}