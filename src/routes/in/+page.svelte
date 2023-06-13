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
                I amd last year student of computer sciense degree.
                I am interested in web development technologies.
                Fullstack ,
                Svelte ,
                javascript, typescript ,nodejs, mongodb, mysql, 
                tailwindcss,
                React  
            </p>

        </Card>
        <Card title ='Projects'>
            <CardWithPhoto title='focus assitant app' src='{userIcon}'>
                <p class=" p-2">
                    this is a fullstack web application with user authentication.
                    this application can help you with your projects and tasks and using this application 
                    you can work on your projects more precisly.
                    <a href=''>click</a> for live demo
                </p>
            </CardWithPhoto>
            <CardWithPhoto title='svelte admin apanel' src='{userIcon}'>
                <p class="p-2">
                    svelte admin panel is a full fleged and user friendly admin panel, it has ready to use commponents and layouts.
                    it can help you to customize easily and fast 
                </p>
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
            <div class="p-3">
                svelte, typescript, javascript, react, nodejs, express, tailwindcss, mongodb.
            </div>
        </Card>
    </div>
    <div class="col-span-3">
        <Card title = 'people you may know'>
            people you may know
        </Card>
    </div>
</div>