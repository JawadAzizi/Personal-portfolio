import { writable } from "svelte/store";

export const post = writable([{}] as {
    id:number,
    title: string,
    description: string,
    url?: string,
    likesNum: number,
    liked: boolean,
    commentsNum: number,
    repostsNum: number,
}[]) ;
export const page = writable({} as any) ;