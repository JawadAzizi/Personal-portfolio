<script lang="ts">

    import ProfileCard from "$lib/components/profile/ProfileCard.svelte";
    import Card from "$lib/components/Card.svelte";

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
                somet hing aobut me
            </p>

        </Card>
        <Card title ='experience'>
            <p>some thing about experience</p>

        </Card>
        <Card title ='Education'>
            <div class="flex">
                Eduction
            </div>
        </Card>
        <Card title ='Skills'>
            <div class="flex">
                Skills
            </div>
        </Card>
    </div>
    <div class="col-span-3">
        people you may know
    </div>
</div>