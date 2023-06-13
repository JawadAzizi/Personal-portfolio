<script lang='ts'>
    export let backgound : string| undefined = undefined
    export let profile : string| undefined = undefined
    export let title: string| undefined = undefined


</script>

<div class="rounded-lg bg-white  m-2">
    <div class="background-photo">
        <img src="{backgound}" alt="backgound" class="w-full h-48">
    </div>
    <div class="relative py-6">
        <!--  avatar -->
        <div class="absolute rounded-full bg-white" style="position: absolute;top: -4rem ; left: 1rem">
            <img src="{profile}" alt="avatar" class=" rounded-lg w-32">
        </div>
    </div>
    <div class="">
        <div  class=" col-span-9">
            <h1>{title}</h1>
        </div>
        <div class="p-3  col-span-3">
            <!-- education -->
            <slot />
        </div>
    </div>
    <div class="p-5">
        <div>
            friends
        </div>
        <div>
            <button class="bg-blue-600 rounded-2xl p-1 ">message</button>
            <button class="border rounded-2xl">more</button>
        </div>
    </div>
</div>