<script lang="ts">
  import linkeInLogo  from '$lib/icon/linkedin logo.svg'
  import homeIcon from '../lib/icon/home.svg'
  import jobIcon from '../lib/icon/job.svg'
  import menuIcon from '../lib/icon/menu.svg'
  import messageIcon from '../lib/icon/message.svg'
  import networkIcon from '../lib/icon/network.svg'
  import notificationIcon from '../lib/icon/notification.svg'
  import postIcon from '../lib/icon/postJob.svg'
  import HeaderItem from '../lib/components/HeaderItem.svelte'
  import searchIcon from '../lib/icon/search.svg'
  import userIcon from '../lib/icon/user.svg'

</script>

<nav class="sticky px-14 flex  justify-between align-middle bg-white">
    <div class=" flex  p-1 items-center col-span-3">
        <img src="{linkeInLogo}" alt="linkedin logo" class="w-10 h-8">
        <div class="relative rounded flex w-full items-center ">
          <!-- <img class="rounded w-6 align-middle absolute" src="{searchIcon}" alt="search"> -->
          <input type='text'  class= " col-span-8 h-7 ps-8  bg-slate-200 focus:bg-slate-100 focus:min-w-full" placeholder="Search" > 
          <img class="absolute" src="{searchIcon}" alt="search icon">
        </div>
    </div>
    <div class="col-span-5">
      <ul class="flex  ">
        <HeaderItem href ='/feed' title='home' icon={homeIcon} ></HeaderItem>
        <HeaderItem href='/mynetwork' title='network' icon={networkIcon} ></HeaderItem>
        <HeaderItem href='/jobs' title='job' icon={jobIcon} ></HeaderItem>
        <HeaderItem href='/messaging' title='message' icon={messageIcon} ></HeaderItem>
        <HeaderItem href='/notifications' title='notification' icon={notificationIcon} ></HeaderItem>
        <HeaderItem title='profile' icon='{userIcon}' >
          <a href="/in">view profile</a>
        </HeaderItem>
      </ul>
    </div>
    <div class="flex" style="border-left: 1px solid rgba(23,23,23,0.2)" >
      <HeaderItem title='for buisness' icon={menuIcon}></HeaderItem>
      <HeaderItem title='post job' icon={postIcon}></HeaderItem>
    </div>
    
</nav>