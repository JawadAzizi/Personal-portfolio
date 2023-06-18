<script lang="ts">
    import Post from '$lib/components/Post.svelte'
	import StartApost from './StartApost.svelte';
    import CardWithPhoto from '$lib/components/CardWithPhoto.svelte';
    import userIcon from '$lib/icon/user.svg'
    import Card from '$lib/components/Card.svelte';
	import ProfilePreview from './ProfilePreview.svelte';
    import image1 from '$lib/image/9.jpg'
    import image2 from '$lib/image/10.jpg'
    import image3 from '$lib/image/11.jpg'
    import image4 from '$lib/image/12.jpg'

</script>
<div class="grid grid-cols-12 "> 
    <div class="  col-span-3 flex justify-center">
        <ProfilePreview>
            
        </ProfilePreview>
        
    </div>
    <div class=" col-span-6   justify-center ">
        <StartApost></StartApost>
        <Post img="{image1}" text='this is my firs post'></Post>
        <Post img="{image2}" text="this is my second post" ></Post>
        <Post img="{image3}" text="this is my third post" ></Post>
        <Post img="{image4}" text="this is my forth post" ></Post>
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