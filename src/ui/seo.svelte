<script>
	/** @type {string | undefined} */
	export let title = undefined

	/** @type {string | undefined} */
	export let description = undefined

	// todo: move to config/env
	const app_name = 'Quran'
	const app_desc = `Aplikasi al-Quran berbasis web`
</script>

<svelte:head>
	<title>{title ? `${title} - ${app_name}` : app_name}</title>
	<meta name="description" content={description?.replace(/<[^>]+>/g, '') ?? app_desc} />
	<!-- todo: seo -->
</svelte:head>
