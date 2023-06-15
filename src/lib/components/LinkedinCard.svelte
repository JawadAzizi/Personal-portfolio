<script lang="ts">
    import bgImage from '$lib/image/2.png'

</script>


<div class="rouded-lg overflow-hidden">
    <div class=" relative rounded-lg overflow-hidden">
        <div>
            <img src="{bgImage}" alt=" likedin">
        </div>
        <div class=' absolute' style="top: 0.5rem;"> 
            <div class="flex flex-col m-1 gap-1">
                <span class="bg-orange-400">See how is hiring</span>
                <span class="bg-orange-400">on Linkedin</span>
            </div>
        </div>
    </div>
    <div class="links">
        <div class="text-sm font-light  content-center text-center">
            <div  class="flex flex-wrap justify-center align-baseline gap-2 gap-x-3 text-sm ">
                <a class="hover:underline" href="/feed">about</a>
                <a class="hover:underline" href='/feed'>accessability</a>
                <a class="hover:underline" href='/feed'>help center</a>
                <a class="hover:underline" href='/feed'>privacy and terms</a>
                <a class="hover:underline" href='/feed'>ad choice</a>
                <a class="hover:underline" href='/feed'>advertise</a>
                <a class="hover:underline" href='/feed'>buisness service</a>
                <a class="hover:underline" href='/feed'>get linkedin app</a>
                <a class="hover:underline" href='/feed'>more</a>
            </div>
        </div>
        <div class="flex justify-center">
            <h1>Linkedin Corporation &copy;{new Date().getFullYear()}</h1>
        </div>
    </div>
</div>
