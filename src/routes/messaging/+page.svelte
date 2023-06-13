<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import PeopleCard from "$lib/components/PeopleCard.svelte";
    import userIcon from '$lib/icon/user.svg'
    import background from '$lib/image/8.jpg'
    import MessageList from "./MessageList.svelte";
    import ChatHistory from "./ChatHistory.svelte";
</script>

<div class="mynetwork grid grid-cols-12">
    <div class="col-span-8 pb-2 grid grid-cols-12 border-2 rounded-lg bg-white border-gray-300" style="border-width: 0.5px;">
        <div class="col-span-5 content-stretch">
            <MessageList>
                <CardWithPhoto src ={userIcon} title ='Someone'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone '></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone'></CardWithPhoto>
            </MessageList>
        </div>
        <div class="col-span-7 content-stretch">
            <ChatHistory title = 'chat dialog'> 
                <CardWithPhoto src ={userIcon} title ='Someone'>
                    hellow how are you
                </CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'>
                     i am find  
                </CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'>
                    thank you
                </CardWithPhoto>
                <CardWithPhoto src ={userIcon} title ='Someone else'>
                    how about you
                </CardWithPhoto>
            </ChatHistory>
        </div>
    </div>
    <div class="col-span-4">
        <Card title='Mannage my netword'>
            <div>
                try linked in premium
            </div>
        </Card>
    </div>
</div>
