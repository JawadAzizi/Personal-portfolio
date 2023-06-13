<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import PeopleCard from "$lib/components/PeopleCard.svelte";
    import userIcon from '$lib/icon/user.svg'
    import background from '$lib/image/8.jpg'


</script>


<div class="mynetwork grid grid-cols-12">
    <div class="col-span-4">
        <Card title='Mannage my netword'>
            <ul>
                <li>
                    connections 42
                </li>
                <li>
                    contact
                </li>
                <li>
                    follower
                </li>
                <li>
                    groups
                </li>
                <li>
                    Events
                </li>
                <li>
                    pages
                </li>
                <li>
                    Newsletters
                </li>

            </ul>
        </Card>

    </div>
    <div class="col-span-8 pb-2">
        <Card title='Invitations'>
            <CardWithPhoto title='someone' src='{userIcon}'>
                <div class="grid grid-cols-12">
                    <div class="col-span-6">
                        front end engineer
                    </div>
                    <div class="col-span-6">
                        <button class="btn">ignore</button>
                        <button class="btn-primary">accept</button>
                    </div>
                </div>
            </CardWithPhoto>
            <CardWithPhoto title='someone' src='{userIcon}'>
                <div class="grid grid-cols-12">
                    <div class="col-span-6">
                        front end engineer
                    </div>
                    <div class="col-span-6">
                        <button class="btn">ignore</button>
                        <button class="btn-primary ">accept</button>
                    </div>
                </div>
            </CardWithPhoto>
            <CardWithPhoto title='someone' src='{userIcon}'>
                <div class="grid grid-cols-12">
                    <div class="col-span-6">
                        front end engineer
                    </div>
                    <div class="col-span-6">
                        <button class="btn">ignore</button>
                        <button class="btn-primary ">accept</button>
                    </div>
                </div>
            </CardWithPhoto>

        </Card>
        <Card title='Invitations'>
            <div  class="flex ">
                <div>
                    <PeopleCard title = 'someone' profile  = "{userIcon}" backgound = '{background}'>
                        <div>ceo and founder of company A</div>
                    </PeopleCard>

                </div>
                <div>
                    <PeopleCard title = 'someone' profile  = "{userIcon}" backgound = '{background}'>
                        <div>ceo and founder of company A</div>
                    </PeopleCard>

                </div>
                <div>
                    <PeopleCard title = 'someone' profile  = "{userIcon}" backgound = '{background}'>
                        <div>ceo and founder of company A</div>
                    </PeopleCard>

                </div>


                
               
            </div>
            

        </Card>
    </div>
</div>