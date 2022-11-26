<script>
	let classes = ''
	export { classes as class }
	export let busy = false
</script>

{#if busy}
	<div
		class="flex bg-emerald-600/10 h-1 m-0 w-full before:(h-1 m-0 w-full bg-emerald-600/70 content-empty) {classes}"
		role="progressbar"
	/>
{:else}
	<div class="h-1 w-full {classes}" />
{/if}

<style>
	div[role='progressbar']:before {
		animation: animate-progress 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	@keyframes animate-progress {
		0% {
			transform: translateX(-45%) scaleX(0.1);
		}
		50% {
			transform: translateX(10%) scaleX(0.5);
		}
		100% {
			transform: translateX(50%) scaleX(0);
		}
	}
</style>
