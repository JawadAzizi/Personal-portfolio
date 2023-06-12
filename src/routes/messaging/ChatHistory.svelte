<script lang="ts">
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import userIcon from '$lib/icon/user.svg'
    export let title:string|undefined = ''

</script>

<div class="message-list border-gray-300 "  style="border-width: 0.5px;"s>
    <div class=" px-2 border-gray-300" style="border-width: 0.5px;">
        {title}
    </div>
    <div  class="overflow-y-auto">
        <slot></slot>
    </div>
</div>