<script lang="ts">
    import PostBody from "./PostBody.svelte";
    import PostFooter from "./PostFooter.svelte";
    import PostHeader from "./PostHeader.svelte";

</script>

<div class="post bg-white my-4 rounded-lg">
    <PostHeader></PostHeader>
    <PostBody text='some text'>
        <div>some content</div>
    </PostBody>
    <PostFooter></PostFooter>
</div>