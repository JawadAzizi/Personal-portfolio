<script lang="ts">
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import userIcon from '$lib/icon/user.svg'

</script>

<div class="message-list border-gray-300 "  >
    <div class=" px-2">
        Message
    </div>
    <div  class="overflow-y-auto">
        <CardWithPhoto src ={userIcon} title ='Someone'></CardWithPhoto>
        <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
        <CardWithPhoto src ={userIcon} title ='Someone '></CardWithPhoto>
        <CardWithPhoto src ={userIcon} title ='Someone else'></CardWithPhoto>
        <CardWithPhoto src ={userIcon} title ='Someone'></CardWithPhoto>
    </div>

</div>