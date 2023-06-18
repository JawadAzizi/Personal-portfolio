<script lang='ts'>
    import backPhoto from '../../image/8.jpg'
    import userIcon from '../../icon/user.svg'
	import CardWithPhoto from '../CardWithPhoto.svelte';
    import KabulUnversityLogo from '$lib/image/kabulUniversityLogo.jpg'

</script>

<div class="rounded-lg bg-white  m-2 overflow-hidden">
    <div class="background-photo">
        <img src="{backPhoto}" alt="backgound" class="w-full h-48">
    </div>
    <div class="relative py-6">
        <!--  avatar -->
        <div class="absolute rounded-full bg-white overflow-hidden" style="position: absolute;top: -4rem ; left: 1rem">
            <img src="{userIcon}" alt="avatar" class=" rounded-lg w-32">
        </div>
    </div>
    <div class="grid grid-cols-12  p-5">
        <div  class=" col-span-9">
            <!-- info -->
            <h1 class=" font-bold text-3xl">Jawad Azizi</h1>
            <h6>Fullstack- Svelte | SvelteKit | JS | TS | Nodejs | express</h6>
            
            <div>connection</div>
        </div>
        <div class="p-2 float-left  col-span-3">
            <!-- education -->
            <CardWithPhoto src='{KabulUnversityLogo}' title='Kabul University'>
            </CardWithPhoto>
        </div>
    </div>
    <div class="p-5">
        <div>
            Followers
        </div>
        <div>
            <button class="btn-primary ">message</button>
            <button class="btn ">more</button>
        </div>
    </div>


</div>