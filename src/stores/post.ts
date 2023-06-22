import { writable } from "svelte/store";

export const post = writable([{}] as {
    title: string,
    description: string,
    url?: string,
    likesNum: number,
    commentsNum: number,
    repostNum: number,
}[]) ;