<script lang='ts'>
    import backPhoto from '../../image/8.jpg'
    import userIcon from '../../icon/user.svg'

</script>

<div class="rounded-lg bg-white  m-2">
    <div class="background-photo">
        <img src="{backPhoto}" alt="backgound" class="w-full h-48">
    </div>
    <div class="relative py-6">
        <!--  avatar -->
        <div class="absolute rounded-full bg-white" style="position: absolute;top: -4rem ; left: 1rem">
            <img src="{userIcon}" alt="avatar" class=" rounded-lg w-32">
        </div>
    </div>
    <div class="grid grid-cols-12  p-5">
        <div  class=" col-span-9">
            <!-- info -->
            <h1>name</h1>
            <h6>info</h6>
            <div>some other info</div>
            <div>connection</div>
        </div>
        <div class="p-3  col-span-3">
            <!-- education -->
            kabul university
        </div>

    </div>
    <div class="p-5">
        <div>
            friends
        </div>
        <div>
            <button class="bg-blue-600 rounded-2xl p-1 ">message</button>
            <button class="border rounded-2xl">more</button>
        </div>
    </div>


</div>