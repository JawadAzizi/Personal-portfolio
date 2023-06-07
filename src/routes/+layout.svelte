<script lang='ts'>
    import '../app.css'
    import Header from "./Header.svelte";
</script>

<div class="app  p-0 bg-gray-500 flex flex-col">
    <Header />
    <main>
        <slot /> 
    </main>
    
</div>