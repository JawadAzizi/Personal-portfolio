<script lang="ts">
    import PostBody from "./PostBody.svelte";
    import PostFooter from "./PostFooter.svelte";
    import PostHeader from "./PostHeader.svelte";

</script>

<div class="post bg-white">
    <PostHeader></PostHeader>
    <div>title</div>
    <PostBody> </PostBody>
    <PostFooter></PostFooter>
</div>