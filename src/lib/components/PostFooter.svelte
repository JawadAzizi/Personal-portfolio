<script >
    import like from '../icon/like.svg'
    import comment from '../icon/comment.svg'
    import repost from '../icon/repost.svg'
    import send from '../icon/send.svg'


</script>
<div  class="px-2 py-1">
    <div class="flex justify-between font-light text-xs mb-0 pb-0">
        <div class="p-1">
            <div>
                <button class='p-0 m-0 hover:underline hover:text-blue-800'>Like</button>
            </div>
        </div>
        <div class="flex gap-2 p-1">
            <div>
                <button class='p-0 m-0 hover:underline hover:text-blue-800'>Coments</button>
            </div>
            <div>
                <button class='p-0 m-0 hover:underline hover:text-blue-800'>Reposts</button>
            </div>
        </div>  
    </div>
    <hr class="p-0 m-0">
    <div class="post-footer flex justify-between p-1  text-sm opacity-70    ">
        <button class="flex rounded w-full  h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{like}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">like</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{comment}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">Comment</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{repost}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">Repost</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-200 justify-center content-center align-middle">
            <img src="{send}" alt="Like" class="w-6">  
            <div class="flex content-center items-center justify-center">Send</div>
        </button>
    </div>
</div>