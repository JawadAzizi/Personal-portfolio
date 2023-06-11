<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import PeopleCard from "$lib/components/PeopleCard.svelte";
    import userIcon from '$lib/icon/user.svg'
    import background from '$lib/image/8.jpg'


</script>


<div class="mynetwork grid grid-cols-12">
    <div class="col-span-3">
        <Card title='Mannage my netword'>
            <ul>
                <li>
                    my jobs
                </li>
                <li>
                    job alerts
                </li>
                <li>
                    demonstrate skills
                </li>
                <li>
                    interview preps
                </li>
                <li>
                    resume builder
                </li>
                <li>
                    Job seeker guides
                </li>
                <li>
                    Application setting
                </li>

            </ul>
        </Card>

    </div>
    <div class="col-span-6 pb-2">
        <Card title='recent job search'>
            <Card title='full stack developer'>
                <div class="px-2">
                    worldwide
                    <br>
                    remote
                </div>
                <hr>
            </Card>
            <Card title='frontend developer'>
                <div class="px-2">
                    worldwide
                    <br>
                    remote
                </div>
                <hr>
            </Card>
            <Card title='backend developer'>
                <div class="px-2">
                    worldwide
                    <br>
                    remote
                </div>
                <hr>
            </Card>
            
        </Card>
        <Card title='jobs where you are top applicant'>
            <CardWithPhoto src ='{userIcon}'>
                <Card title='ui/ux designer'>
                    afghanistan
                </Card>

            </CardWithPhoto>
            <CardWithPhoto src ='{userIcon}'>
                <Card title='Golang developer'>
                    germany
                </Card>

            </CardWithPhoto>
            
        </Card>
    
    </div>
    <div class="col-span-3 pb-2">
        <Card title='open to work1'>
            <div>
                recommended based on your activity
            </div>
            <div>
                show recruter your are open to new oppertunites
            </div>
            
        </Card>
    
    </div>
</div>