<script>
	import Seo from '$src/ui/seo.svelte'
	import SurahItem from '$src/ui/surah-item.svelte'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Seo />

<article class="grid sm:(grid-cols-2 max-w-3xl) xl:(grid-cols-3 max-w-6xl) mx-auto my-4">
	{#each data.all_surah as surah (surah)}
		<SurahItem {surah} />
	{/each}
</article>
