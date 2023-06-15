<script lang="ts">
    import Post from '$lib/components/Post.svelte'
	import StartApost from './StartApost.svelte';
    import CardWithPhoto from '$lib/components/CardWithPhoto.svelte';
    import userIcon from '$lib/icon/user.svg'
    import Card from '$lib/components/Card.svelte';
	import ProfilePreview from './ProfilePreview.svelte';

</script>
<div class="grid grid-cols-12 "> 
    <div class="  col-span-3 flex justify-center">
        <ProfilePreview>
            
        </ProfilePreview>
        
    </div>
    <div class=" col-span-6   justify-center ">
        <StartApost></StartApost>
        <Post ></Post>
        <Post ></Post>
        <Post ></Post>
    </div>
    <div class=" col-span-3 flex justify-center">
        <Card title='add to your favorite'>
            <CardWithPhoto src='{userIcon}' title='web developers group'>
                <div class=" text-sm font-light">group non profit</div>
                <div>
                    <button class="btn w-42"> follow</button>
                </div>

            </CardWithPhoto>
            <CardWithPhoto src='{userIcon}' title='js developes'>
                <div class=" text-sm font-light">group non profit</div>
                <div>
                    <button class="btn w-42"> follow</button>
                </div>

            </CardWithPhoto>
            <CardWithPhoto src='{userIcon}' title='svelte lovers'>
                <div class=" text-sm font-light">group non profit</div>
                <div>
                    <button class="btn w-42"> follow</button>
                </div>

            </CardWithPhoto>
            


        </Card>
    </div>
</div>