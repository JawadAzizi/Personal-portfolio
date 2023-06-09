<script lang='ts'>
    import arrow from '../icon/arrow.svg'
    export let title: string;
    export let icon: string;
    export let href: string | undefined = undefined;

    let isContentOpen = false

</script>

<li class="header-item p-1 flex justify-center text-center flex-col">
    {#if !href}
        <img class=" rounded m-auto" width='30px' src="{icon}" alt="title">
        <div class="text-center m-auto flex">
            <div>
                {title}
            </div>
            {#if $$slots.default}
                <button on:click={()=>isContentOpen = !isContentOpen}>
                    <img class="rounded m-auto" width="30px" src="{arrow}" alt="arrow">
                </button>   
                {#if isContentOpen}
                    <div class="absolute pt-6 flex">
                        <div class=" border rounded-lg">
                            <slot></slot>
                        </div>
                    </div>
                {/if}
            {/if}
        </div>
    {:else}
        <a   class="flex justify-center flex-col" href="{href}">
            <img class="rounded m-auto" width="30px" src="{icon}" alt="title">
            <div>
                {title}
            </div>
            {#if $$slots.default}
                <button on:click={()=> isContentOpen = !isContentOpen}>
                    <img class="rounded m-auto" width="30px" src="{arrow}" alt="arrow">
                </button>  
                {#if isContentOpen}
                    <div class="absolute pt-6 flex">
                        <div class=" border rounded-lg">
                            <slot></slot>
                        </div>
                    </div>
                {/if}
            {/if}
        </a>
    {/if}
</li>
