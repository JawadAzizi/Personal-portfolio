<script lang='ts'>
    import Avatar from "./Avatar.svelte";
    import optionIcon from '../icon/options.svg'
    import userIcon from '../icon/user.svg'

</script>


<div class="post-header flex justify-between  align-text-top p-1">
    <div class="avatar">
        <Avatar href='{userIcon}' rounded></Avatar>
    </div>
    <div class="titles w-full">
        <h3>title</h3>
        <div>sedcription</div>
        <div>time</div>
    </div>
    <div class="options">
        <img src="{optionIcon}" alt="option">
    </div>
</div>