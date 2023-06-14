<script lang="ts">
    import CardWithPhoto from "$lib/components/CardWithPhoto.svelte";
    import userIcon from '$lib/icon/user.svg'
    export let title:string|undefined = ''
    import { fade } from "svelte/transition";
	import Eliza from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let div:HTMLDivElement;
	let autoscroll:boolean;

	beforeUpdate(() => {
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});

	const eliza = new Eliza();

	let comments = [
		{ author: 'eliza', text: eliza.getInitial() }
	];

	function handleKeydown(event:Event) {
		if (event.key === 'Enter') {
			const text = event.target.value;
			if (!text) return;

			comments = comments.concat({
				author: 'user',
				text
			});

			event.target.value = '';

			const reply = eliza.transform(text);

			setTimeout(() => {
				comments = comments.concat({
					author: 'eliza',
					text: '...',
					placeholder: true
				});

				setTimeout(() => {
					comments = comments.filter(comment => !comment.placeholder).concat({
						author: 'eliza',
						text: reply
					});
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
		}
	}

</script>

<div transition:fade={{delay: 0, duration: 300}} class="message-list border-gray-300 "  style="border-width: 0.5px;"s>
    <div class=" px-2 border-gray-300" style="border-width: 0.5px;">
        {title}
    </div>
    <div  class="h-screen w-full relative">
            <div class="scrollable " bind:this={div}>
                {#each comments as comment}
                    <article class={comment.author}>
                        <span>{comment.text}</span>
                    </article>
                {/each}
            </div>
            <div class="message-section sticky top-[100vh]">
                <input  class=" border static end-9  " on:keydown={handleKeydown}>
            </div>
    </div>
</div>


<style>
    .message-section{
        color: indianred;
    
    }

	.scrollable {
		flex: 1 1 auto;
		border-top: 1px solid #eee;
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}

	article {
		margin: 0.5em 0;
	}

	.user {
		text-align: right;
	}

	span {
		padding: 0.5em 1em;
		display: inline-block;
	}

	.eliza span {
		background-color: #eee;
		border-radius: 1em 1em 1em 0;
	}

	.user span {
		background-color: #0074D9;
		color: white;
		border-radius: 1em 1em 0 1em;
	}
</style>