<script lang='ts'>
    export let title: string;
    export let icon: string;
    export let href: string | null = null;

</script>

<li class="header-item p-1 flex justify-center text-center">
    {#if href}
        <img class=" rounded m-auto" width='30px' src="{icon}" alt="title">
        <div class="text-center m-auto">{title}</div>
    {:else}
        <a   class="flex justify-center flex-col" href="{href}">
            <img class="rounded m-auto" width="30px" src="{icon}" alt="title">
            <div class="font-serif	font-family: Times New Roman text-center m-auto">{title}</div>
        </a>
    {/if}
    {#if $$slots.default}
        
    {/if}
</li>
