<script lang="ts">
    export let title: string| undefined 

</script>

<div class=" card bg-white rounded-lg m-2">
    <div class="card-header font-bold p-2">
        {title}
    </div>
    <div class="card-body">
        <slot></slot>
    </div>
</div>