<script lang="ts">

    import ProfileCard from "$lib/components/profile/ProfileCard.svelte";
    import Card from "$lib/components/Card.svelte";
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import userIcon from '$lib/icon/user.svg'

</script>



<div class="in grid grid-cols-12">
    <div class="col-span-9">
        <ProfileCard  />
        <Card title = 'Hilights'>
            <div class="grid grid-cols-2">
                <div class="col-span-1">
                    mutual groups
                </div>
                <div class="col-span-1">
                    event
                </div>
            </div>
        </Card>
        <Card title = 'Fetured'>
            <div class="flex">
                <Card title='newslatter'>
                    something
                </Card>
                <Card title='post'>
                    something
                </Card>
                <Card title='post'>
                    something
                </Card>
            </div>
        </Card>
        <Card title ='about'>
            <p>
                front end React developer 
                typescript javascript developer 
                tailwindcss developer
            </p>

        </Card>
        <Card title ='experience'>
            <CardWithPhoto title='web 3 frontend developer' src='{userIcon}'>
                <div>full time</div>
                <div>may 2020 - june-2023</div>
                <div>Afgnanistan</div>
            </CardWithPhoto>

        </Card>
        <Card title ='Education'>
            <CardWithPhoto title='Kabul university' src='{userIcon}'>
                <div>bachelor of computer sciense</div>
                <div>2019 - 2023</div>
                <div class="p-2">
                    <p>data structure and algorithms, software engineering, project management
                        database design and implementation
                    </p>

                </div>
            </CardWithPhoto>
        </Card>
        <Card title ='Skills'>
            <div class="flex">
                Skills
            </div>
        </Card>
    </div>
    <div class="col-span-3">
        <Card title = 'people you may know'>
            people you may know
        </Card>
    </div>
</div>