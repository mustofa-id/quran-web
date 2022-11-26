<script>
	/** @type {string | undefined} */
	export let title = undefined

	/** @type {string | undefined} */
	export let description = undefined

	// todo: move to config/env
	const app_name = 'eQuran Web'
	const app_desc = `eQuran Web adalah aplikasi al-Quran berbasis web menggunakan eQuran API`
</script>

<svelte:head>
	<title>{title ? `${title} - ${app_name}` : app_name}</title>
	<meta name="description" content={description ?? app_desc} />
	<!-- todo: seo -->
</svelte:head>
