<script>
	import { navigating } from '$app/stores'
	import ProgressBar from '$src/ui/progress-bar.svelte'
	import { derived } from 'svelte/store'

	import '@unocss/reset/tailwind.css'
	// custom style must be after reset
	import '$src/app.css'
	// and before uno.css
	import 'uno.css'

	const delayedNavigating = derived(navigating, (nav, set) => {
		setTimeout(() => set(nav), 250)
	})
</script>

<ProgressBar class="fixed top-0 left-0 z-110" busy={!!$navigating && !!$delayedNavigating} />

<main>
	<slot />
</main>
