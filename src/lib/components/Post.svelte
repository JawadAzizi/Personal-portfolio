<script lang="ts">
    import PostBody from "./PostBody.svelte";
    import PostFooter from "./PostFooter.svelte";
    import PostHeader from "./PostHeader.svelte";
    export let id: number
    export let title: string
    export let text: string|undefined
    export let img: string
    

</script>

<div class="post bg-white my-4 rounded-lg">
    <PostHeader title = '{title}' img = '{img}'></PostHeader>
    <PostBody  text='{text}'>
        <slot></slot>
    </PostBody>
    <PostFooter {id}></PostFooter>
</div>