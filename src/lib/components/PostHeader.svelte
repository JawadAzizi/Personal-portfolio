<script lang='ts'>
    import Avatar from "./Avatar.svelte";
    import optionIcon from '../icon/options.svg'

</script>


<div class="post-header">
    <div class="avatar">
        <Avatar href='' rounded></Avatar>
    </div>
    <div class="titles">
        <div>title</div>
        <div>sedcription</div>
        <div>time</div>
    </div>
    <div class="options">
        <img src="{optionIcon}" alt="option">
    </div>
</div>