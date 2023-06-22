<script lang="ts">
    export let text: string|undefined

</script>




<div class="post-body">
    <div class="post-text font-light text-base">
        {text}
    </div>
    <div class="post-object ">
        <slot></slot>
    </div>
</div>