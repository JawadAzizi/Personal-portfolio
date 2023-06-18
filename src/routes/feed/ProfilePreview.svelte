<script lang='ts'>
    import backPhoto from '$lib/image/8.jpg'
    import userIcon from '$lib/icon/user.svg'

</script>

<div class="rounded-lg bg-white overflow-hidden m-2 h-fit">
    <div class="background-photo">
        <img src="{backPhoto}" alt="backgound" class="w-full h-28">
    </div>
    <div class="relative py-2 ">
        <!--  avatar -->
        <div class="absolute rounded-full  bg-white" style="position: absolute;top: -3rem ; left: 30%">
            <div>
                <img src="{userIcon}" alt="avatar" class=" rounded-lg w-20 ">
            </div>
        </div>
    </div>
    <div class="p-5">
        <div  class="  w-full">
            <!-- info -->
            <h1 class=" font-bold text-center text-xl">
                <a href="/in" class=" hover:underline hover:text-blue-900">Jawad Azizi</a>
                
            </h1>
            <h6 class=" text-sm font-light">Fullstack- Svelte | SvelteKit | JS | TS | Nodejs | express</h6>
        </div>
    </div>
    <hr>
    <div class="p-5 text-sm font-light">
        <div class=" flex justify-between hover:bg-gray-300">
            <div>
                <a href="/feed" class="hover:underline hover:text-blue-900">Connections</a>
            </div>
            <div>42</div>
        </div>
        <div class=" flex justify-between hover:bg-gray-300">
            <div>
                <a href="/feed" class="hover:underline hover:text-blue-900">who have viewed your profile </a>
            </div>
            <div>6</div>
        </div>
    </div>
    <hr>
    <div class="p-5 text-sm font-light">
        <div class=" flex justify-between hover:bg-gray-300">
            <div>
                <a href="/feed" class="hover:underline hover:text-blue-900">access prremium today</a>
                
            </div>
        </div>
        <div class=" flex justify-between hover:bg-gray-300">
            <div>
                <a href="/feed" class="hover:underline hover:text-blue-900">get hired faster try premuim free </a>
                
            </div>
        </div>
    </div>
    <hr>
    <div class="p-5 text-sm font-light">
        <div>
            <a class="underline hover:underline hover:text-blue-900" href="/in"  >my items</a> 
        </div>



    </div>



</div>