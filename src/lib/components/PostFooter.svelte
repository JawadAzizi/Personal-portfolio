<script lang="ts">
    import like from '../icon/like.svg'
    import comment from '../icon/comment.svg'
    import repost from '../icon/repost.svg'
    import send from '../icon/send.svg'
    export let id: number
    import { post } from '../../stores/post';

    const handleLike =(event:MouseEvent)=>{
        post.update(pt =>{
            pt.map(p=>{
                if(p.id === id  ){
                    p.liked? p.likesNum-- :p.likesNum++
                    p.liked = !p.liked;
                    return p
                }
            })
            return pt
        })
    }
    const handleComment =(event:MouseEvent)=>{
        $post = $post.map(pt=>{
            if(pt.id === id) pt.commentsNum== pt.commentsNum+1
            return pt
        })
    }


    const handleRepost =(event:MouseEvent)=>{
        $post = $post.map(pt=>{
            if(pt.id === id) pt.repostsNum== pt.repostsNum+1
            return pt
        })
    }
    let likesNum :number | undefined = 0
    let commentsNum :number | undefined = 0
    let  repostsNum :number | undefined = 0
    let  liked :boolean | undefined = false

    post.subscribe(pt=>{
        let pos = pt.find(p => p.id === id)
        likesNum = pos?.likesNum
        commentsNum = pos?.commentsNum
        repostsNum = pos?.repostsNum
        liked = pos?.liked
    })
    

</script>
<div  class="px-2 py-1">
    <div class="flex justify-between font-light text-xs mb-0 pb-0">
        <div class="p-1">
            <div>
                <button class='p-0 m-0 hover:underline hover:text-blue-800'>{likesNum} Likes</button>
            </div>
        </div>
        <div class="flex gap-2 p-1">
            <div>
                <button class='p-0 m-0 hover:underline hover:text-blue-800'>{commentsNum} Comments</button>
            </div>
            <div>
                <button class='p-0 m-0 hover:underline hover:text-blue-800'>{repostsNum} Reposts</button>
            </div>
        </div>  
    </div>
    <hr class="p-0 m-0">
    <div class="post-footer flex justify-between p-1  text-sm opacity-70    ">
        <button on:click={handleLike} class="  flex rounded w-full  h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{like}" alt="Like" class="w-6 {liked? 'fill-current text-blue': ''}">  
            <div class="flex content-center items-center justify-center {liked? 'text-blue-700': ''} ">{liked? 'liked': 'like'}</div>
        </button>
        <button on:click={handleComment} class="flex rounded w-full h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{comment}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">Comment</div>
        </button>
        <button on:click={handleRepost} class="flex rounded w-full h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{repost}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">Repost</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{send}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">Send</div>
        </button>
    </div>
</div>