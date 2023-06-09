<script lang="ts">
    export let href: string 
    export let rounded: boolean

</script>
<div class="avatar flex m-2">
    {#if href}
        <img src="{href}" class="{rounded} w-14 {rounded? 'rounded-full': ''}" alt='avatar' />
    {/if}
</div>