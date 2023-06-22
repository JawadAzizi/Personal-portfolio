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
    import { post } from "../../stores/post";
    $post = [
        {
            title: 'First post',
            description: 'The first post description',
            url: image1,
            likesNum: 10,
            repostNum: 1,
            commentsNum: 3
        },
        {
            title: 'Second post',
            description: 'The first post description',
            url: image2,
            likesNum: 100,
            repostNum: 10,
            commentsNum: 31
        },
        {
            title: 'Third post',
            description: 'The first post description',
            url: image3,
            likesNum: 100,
            repostNum: 11,
            commentsNum: 13
        },
        {
            title: 'Furth post',
            description: 'The first post description',
            url: image4,
            likesNum: 10,
            repostNum: 4,
            commentsNum: 33
        },
    ]



</script>
<div class="grid grid-cols-12 "> 
    <div class="  col-span-3 flex justify-center">
        <ProfilePreview>
            
        </ProfilePreview>
        
    </div>
    <div class=" col-span-6   justify-center ">
        <StartApost></StartApost>
        {#each $post as pt}
            <Post img="{pt.url}" text='{pt.description}'></Post>
             
            
        {/each}
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