<script lang="ts">
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import userIcon from '$lib/icon/user.svg'
    import { fade } from "svelte/transition";

</script>

<div transition:fade={{delay: 0, duration: 300}} class="message-list  border-gray-300 "   style="border-width: 0.5px;">
    <div class=" border-gray-300 px-2" style="border-width: 0.5px;">
        {"Message"}
    </div>
    <div  class="overflow-y-auto">
        <slot></slot>
    </div>
</div>