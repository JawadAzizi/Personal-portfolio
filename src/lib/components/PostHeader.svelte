<script lang='ts'>
    import Avatar from "./Avatar.svelte";
    import optionIcon from '../icon/options.svg'
    import userIcon from '../icon/user.svg'
    export let title: string
    export let img: string
    

</script>


<div class="post-header flex justify-between  align-text-top p-1">
    <div class="avatar">
        <Avatar href='{img}' rounded></Avatar>
    </div>
    <div class="titles w-full">
        <h3 class="font-medium text-lg ">
            <a href="/in" class="hover:underline hover:text-blue-900">{title}</a>
        </h3>
        <div class="font-light text-sm text-gray-900">Frontend developer - mearn stack developer</div>
        <div class="font-light text-sm text-gray-900">time</div>
    </div>
    <div class="options">
        <button class="p-3 m-1 hover:bg-gray-200 rounded-full">
            <img src="{optionIcon}" alt="option" class="">
        </button>
    </div>
</div>