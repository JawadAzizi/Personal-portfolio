<script lang="ts">

    import ProfileCard from "$lib/components/profile/ProfileCard.svelte";
    import Card from "$lib/components/Card.svelte";
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import userIcon from '$lib/icon/user.svg'
    import jsLogo from '$lib/image/jslogo.png'
    import tsLogo from '$lib/image/tslogo.png'
    import reactLogo from '$lib/image/reactlogo2.jpg'
    import svelteLogo from '$lib/image/svelte3.jpg'
    import nodeLogo from '$lib/image/nodejslogo.jpg'
    import expressLogo from '$lib/image/expressjs.jpg'
    import tailwindLogo from '$lib/image/tailwindlogo.png'
    
    



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
                    <p>
                       Studies: Software Engineering, Data Structure, Algorithm, Application development , Web Development, System Design, Research Methodologies, ADBMS, RDBMS, Machin Learning, Data Science, Mobile Development, Software Security etc.
                    </p>

                </div>
            </CardWithPhoto>
        </Card>
        <Card title ='Skills'>
            <div class="p-3">
                <CardWithPhoto title = 'Svelte' src='{svelteLogo}'>
                    <div>
                        <progress value=0.9 ></progress>
                    </div>
                </CardWithPhoto>
                <CardWithPhoto title = 'typescript' src='{tsLogo}'>
                    <div>
                        <progress value=0.7 ></progress>
                    </div>
                </CardWithPhoto>
                <CardWithPhoto title = 'javascript' src='{jsLogo}'>
                    <div>
                        <progress value=0.8 ></progress>
                    </div>
                </CardWithPhoto>
                <CardWithPhoto title = 'react' src='{reactLogo}'>
                    <div>
                        <progress value=0.7 ></progress>
                    </div>
                </CardWithPhoto>
                <CardWithPhoto title = 'nodejs' src='{nodeLogo}'>
                    <div>
                        <progress value=0.8 ></progress>
                    </div>
                </CardWithPhoto>
                <CardWithPhoto title = 'express' src='{expressLogo}'>
                    <div>
                        <progress value=0.9 ></progress>
                    </div>
                </CardWithPhoto>
                <CardWithPhoto title = 'tailwindcss' src='{tailwindLogo}'>
                    <div>
                        <progress value=0.6 ></progress>
                    </div>
                </CardWithPhoto>
            </div>
        </Card>
    </div>
    <div class="col-span-3">
        <Card title = 'people you may know'>
            <CardWithPhoto src="{userIcon}" title='SomeOne' titleHref='/in'>
                <div class="text-sm font-light pt-0 mt-0">
                    Founder of some company
                </div>
            </CardWithPhoto>
            <CardWithPhoto src="{userIcon}" title='SomeOne' titleHref='/in'>
                <div class="text-sm font-light pt-0 mt-0">
                    Fullstack developer
                </div>
            </CardWithPhoto>
            <CardWithPhoto src="{userIcon}" title='SomeOne' titleHref='/in'>
                <div class="text-sm font-light pt-0 mt-0">
                    Senior java developer
                </div>
            </CardWithPhoto>
            <CardWithPhoto src="{userIcon}" title='SomeOne' titleHref='/in'>
                <div class="text-sm font-light pt-0 mt-0">
                    software engineer
                </div>
            </CardWithPhoto>
        </Card>
    </div>
</div>