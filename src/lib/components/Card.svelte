<script lang="ts">
	import { fade, scale } from "svelte/transition";

    export let title: string| undefined 

</script>

<div  transition:scale={{delay: 0, duration: 400}}  class=" card bg-white rounded-lg m-2 shadow-md ">
    <div class="card-header font-bold p-2">
        {title}
    </div>
    <div class="card-body">
        <slot></slot>
    </div>
</div>