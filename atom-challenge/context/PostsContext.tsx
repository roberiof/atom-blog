import { ReactNode, createContext, useState } from "react";
import PostType  from "../types";

export const PostsContext = createContext<any>(null)

export const PostsProvider = ({children} : {children: ReactNode}) => {
    const [ posts , setPosts ] = useState<PostType[]>([])

    return (
    <PostsContext.Provider value={{ posts , setPosts}}>
        {children} 
    </PostsContext.Provider>
    )
}