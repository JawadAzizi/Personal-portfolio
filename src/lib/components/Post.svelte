<script lang="ts">
    import PostBody from "./PostBody.svelte";
    import PostFooter from "./PostFooter.svelte";
    import PostHeader from "./PostHeader.svelte";
    export let text: string|undefined = undefined
    export let img: string|undefined = undefined
    

</script>

<div class="post bg-white my-4 rounded-lg">
    <PostHeader></PostHeader>
    <PostBody img="{img}"  text='{text}'>
    </PostBody>
    <PostFooter></PostFooter>
</div>