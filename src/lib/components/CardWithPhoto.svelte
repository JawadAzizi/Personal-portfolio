<script lang="ts">
    export let title: string| undefined 
    export let src: string| undefined 

</script>

<div class=" card bg-white rounded-lg my-2 grid grid-cols-12">
    <div class="col-span-2">
        <img src="{src}" alt="card" class="w-20">
    </div>
    <div class="col-span-10">
        <div class="font-bold p-2">
            {title}
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
    
</div>