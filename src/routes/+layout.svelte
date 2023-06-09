<script lang='ts'>
    import '../app.css'
    import Header from "./Header.svelte";
</script>

<div class="app bg-gray-200 p-0 flex flex-col">
    <Header />
    <main>
        <slot /> 
    </main>
    
</div>