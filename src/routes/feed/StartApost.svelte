<script lang='ts'>
    import userIcon from '$lib/icon/user.svg'
    import article from '$lib/icon/article.svg'
    import videoIcon from '$lib/icon/video.svg'
    import eventIcon from '$lib/icon/event.svg'
    import photoIcon from '$lib/icon/photo.svg'
    
    


</script>


<div class='start-a-post bg-white rounded-lg'>

    <div class="flex">
        <div class="col-span-2">
            <img src="{userIcon}" alt="my profile" class="w-20">
        </div>
        <div class="w-full p-3" >
            <input type="text" class="w-full rounded-3xl p-3 border-2" placeholder="Start a Post">
        </div>

    </div>
    <div class=" post-footer flex justify-between p-1">
        
        <button class="flex rounded w-full  h-12 hover:bg-gray-100 justify-center content-center align-middle">
            <img src="{photoIcon}" alt="phoso" class="w-6">  
            <div class="flex content-center items-center justify-center">Photo</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-100 justify-center content-center align-middle">
            <img src="{videoIcon}" alt="post video" class="w-6">  
            <div class="flex content-center items-center justify-center">Video</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-100 justify-center content-center align-middle">
            <img src="{eventIcon}" alt="post event" class="w-6">  
            <div class="flex content-center items-center justify-center">Event</div>
        </button>
        <button class="flex rounded w-full h-12 hover:bg-gray-100 justify-center content-center align-middle">
            <img src="{article}" alt="wirte article" class="w-6">  
            <div class="no-wrap flex content-center items-center justify-center">Write article</div>
        </button>

    </div>

</div>