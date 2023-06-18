<script lang="ts">
    export let title: string| undefined = undefined
    export let src: string| undefined 
    import { fade } from "svelte/transition";

</script>

<div  transition:fade={{delay: 0, duration: 300}} class=" card bg-white rounded-lg m-2 grid grid-cols-12">
    <div class="col-span-2">
        <img src="{src}" alt="card" class="w-20">
    </div>
    <div class="col-span-10">
        <div class="font-medium  ">
            <a href="/feed" class="hover:underline hover:text-blue-900">{title}</a>
            
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</div>