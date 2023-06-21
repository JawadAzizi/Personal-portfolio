import { writable } from "svelte/store";

export const post = writable([{}] as {
    title: String,
    description: String,
    url?: String,
    likesNum: String,
    commentsNum: String,
    repostNum: Number,
}[]) 