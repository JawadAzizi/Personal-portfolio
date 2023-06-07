<script lang="ts">
    import Post from "$lib/components/Post.svelte";
</script>


<div class="grid grid-cols-12  justify-between content-stretch  "> 
    <div class="bg-gray-50  col-span-3 flex justify-center">
        <div>right</div>
    </div>
    <div class="bg-gray-100 col-span-6   justify-center ">
        <Post ></Post>
        <Post ></Post>
        <Post ></Post>
    </div>
    <div class="bg-gray-50 col-span-3 flex justify-center">
        <div>right</div>
    </div>
</div>