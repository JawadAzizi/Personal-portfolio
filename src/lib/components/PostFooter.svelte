<script >
    import like from '../icon/like.svg'
    import comment from '../icon/comment.svg'
    import repost from '../icon/repost.svg'
    import send from '../icon/send.svg'


</script>
<div class="post-footer flex justify-between p-1">
    <button class="flex rounded w-full  h-12 hover:bg-gray-100 justify-center content-center align-middle">
        <img src="{like}" alt="Like" class="w-6">  
        <div class="flex content-center items-center justify-center">like</div>
    </button>
    <button class="flex rounded w-full h-12 hover:bg-gray-100 justify-center content-center align-middle">
        <img src="{comment}" alt="Like" class="w-6">  
        <div class="flex content-center items-center justify-center">Comment</div>
    </button>
    <button class="flex rounded w-full h-12 hover:bg-gray-100 justify-center content-center align-middle">
        <img src="{repost}" alt="Like" class="w-6">  
        <div class="flex content-center items-center justify-center">Repost</div>
    </button>
    <button class="flex rounded w-full h-12 hover:bg-gray-100 justify-center content-center align-middle">
        <img src="{send}" alt="Like" class="w-6">  
        <div class="flex content-center items-center justify-center">Send</div>
    </button>
</div>