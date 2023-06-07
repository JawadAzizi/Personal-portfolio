<script lang="ts">
    export let href: string 
    export let rounded: boolean

</script>
<div class="avatar flex">
    {#if href}
        <img src="{href}" class="{rounded} w-4" alt='avatar' />
    {/if}
</div>