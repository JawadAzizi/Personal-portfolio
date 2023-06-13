<script lang='ts'>
    import { fade } from 'svelte/transition';
    import arrow from '../icon/arrow.svg'
    export let title: string;
    export let icon: string;
    export let href: string | undefined = undefined;
    export let active: boolean = false
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()

    let isContentOpen = false


</script>

<li on:click on:keypress transition:fade={{delay: 250, duration: 1000}} class="header-item font-Nanum font-thin opacity-70 hover:opacity-100   p-1 flex justify-center text-center flex-col {active? 'border-b-2 border-blue-700': ''}">
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
