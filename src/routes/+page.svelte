<script lang="ts">
    import Post from "$lib/components/Post.svelte";
</script>


<div class="grid grid-cols-12  justify-between content-stretch  "> 
    <div class="  col-span-3 flex justify-center">
        <div>right</div>
    </div>
    <div class=" col-span-6   justify-center ">
        <Post ></Post>
        <Post ></Post>
        <Post ></Post>
    </div>
    <div class=" col-span-3 flex justify-center">
        <div>right</div>
    </div>
</div>