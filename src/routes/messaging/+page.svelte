<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import PeopleCard from "$lib/components/PeopleCard.svelte";
    import userIcon from '$lib/icon/user.svg'
    import background from '$lib/image/8.jpg'


</script>


<div class="mynetwork grid grid-cols-12">
    
    <div class="col-span-8 pb-2 grid grid-cols-12">
        <div class="col-span-5">
            <div>
                Messages
            </div>
            <div>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
                <CardWithPhoto src = {userIcon} title = 'someone'></CardWithPhoto>
            </div>
        </div>
        <div class="col-span-7">
            <div>title</div>
            <div>
                chat history 
            </div>

           
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
