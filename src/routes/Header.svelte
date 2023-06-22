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
  import { page } from '../stores/post'




</script>

<nav class="sticky px-14 flex  justify-between align-middle bg-white">
    <div class=" flex  p-0 pe-2 items-center col-span-3 ">
        <img src="{linkeInLogo}" alt="linkedin logo" class="w-10 h-8">
        <div class="relative rounded flex w-full items-center ">
          <!-- <img class="rounded w-6 align-middle absolute" src="{searchIcon}" alt="search"> -->
          <input type='text'  class= " col-span-8 h-7 ps-8  bg-slate-200 focus:bg-slate-100 focus:min-w-full " placeholder="Search" > 
          <img class="absolute" src="{searchIcon}" alt="search icon">
        </div>
    </div>
    <div class="col-span-5 p-0 ">
      <ul class="flex  ">
        <HeaderItem on:click={()=>($page = {feed: true})} on:keypress={()=>($page = {feed: true})} active= {$page.feed?? false} href ='/feed' title='Home' icon={homeIcon} ></HeaderItem>
        <HeaderItem on:click={()=>($page = {mynetwork: true})} on:keypress={()=>($page = {mynetwork: true})}  active= {$page.mynetwork?? false} href='/mynetwork' title='Network' icon={networkIcon} ></HeaderItem>
        <HeaderItem on:click={()=>($page = {jobs: true})} on:keypress={()=>($page = {jobs: true})}  active= {$page.jobs?? false} href='/jobs' title='Job' icon={jobIcon} ></HeaderItem>
        <HeaderItem on:click={()=>($page = {messaging: true})} on:keypress={()=>($page = {messaging: true})}  active= {$page.messaging?? false} href='/messaging' title='Message' icon={messageIcon} ></HeaderItem>
        <HeaderItem on:click={()=>($page = {notification: true})} on:keypress={()=>($page = {notification: true})}  active= {$page.notification?? false} href='/notifications' title='Notification' icon={notificationIcon} ></HeaderItem>
        <HeaderItem on:click={()=>($page = {profile: true})} on:keypress={()=>($page = {profile: true})}  active= {$page.profile?? false} title='Profile' icon='{userIcon}' >
          <a href="/in">view profile</a>
        </HeaderItem>
      </ul>
    </div>
    <div class="flex"  style="border-left: 1px solid rgba(23,23,23,0.2)" >
      <HeaderItem title='for buisness' icon={menuIcon}></HeaderItem>
      <HeaderItem title='post job' icon={postIcon}></HeaderItem>
    </div>
    
</nav>