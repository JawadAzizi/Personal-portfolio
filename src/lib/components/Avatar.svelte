<script lang="ts">
    export let href: string 
    export let rounded: boolean
    export let width: string| undefined = 'w-14'
    export let positon : string|undefined = 'static'
    

</script>
<div class="avatar flex m-2">
    {#if href}
        <img src="{href}"  class="{rounded}  {positon} {width} {rounded? 'rounded-full': ''} {$$restProps}" alt='avatar' />
    {/if}
</div>