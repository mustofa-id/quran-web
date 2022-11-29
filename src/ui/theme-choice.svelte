<script>
	import { browser } from '$app/environment'
	import { persistable } from '$src/ui/utils'

	let classes = ''
	export { classes as class }

	const dark_mode = persistable('dark-mode', false)

	$: toggle_dark_mode($dark_mode)

	/**
	 * @param {boolean} state
	 */
	function toggle_dark_mode(state) {
		if (!browser) return
		const classes = document.documentElement.classList
		state ? classes.add('dark') : classes.remove('dark')
	}
</script>

<!-- prevent theme flickering on page reload -->
<svelte:head>
	<script>
		;(function () {
			try {
				var user_pref = localStorage.getItem('dark-mode')
				var is_dark = user_pref
					? JSON.parse(user_pref)
					: window.matchMedia('(prefers-color-scheme: dark)').matches
				if (is_dark) {
					document.documentElement.classList.add('dark')
					localStorage.setItem('dark-mode', 'true')
				}
			} catch (err) {
				console.error('failed initialize dark mode:', err)
			}
		})()
	</script>
</svelte:head>

<button
	class="icon-dark-mode text-indigo-800 dark:(icon-light-mode text-amber-300) {classes}"
	title="Klik untuk mengaktifkan mode {$dark_mode ? 'terang' : 'gelap'}"
	on:click={() => dark_mode.set(!$dark_mode)}
/>
