<script>
	import Seo from '$src/ui/seo.svelte'
	import SurahItem from '$src/ui/surah-item.svelte'

	/** @type {import('./$types').PageData} */
	export let data

	/** @type {string} */
	let search_query

	/** @type {Surah[]} */
	$: all_surah = search_query
		? data.all_surah.filter(filter_predicate(search_query))
		: data.all_surah

	/**
	 * Simple surah filter predicate
	 *
	 * @param {string} search
	 * @returns {(surah: Surah) => boolean}
	 */
	function filter_predicate(search) {
		return (surah) => {
			return (
				surah.nomor === +search ||
				surah.nama_latin.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			)
		}
	}
</script>

<Seo />

<article class="sm:max-w-3xl xl:max-w-6xl mx-auto my-4">
	<section class="sticky top-2 z-1 m-2 bg-default">
		<label
			class="flex items-center space-x-2 border border-soft rounded focus-within:(outline outline-1) p-2"
		>
			<div class="icon-search" />
			<input
				class="outline-none bg-transparent w-full"
				placeholder="Cari nama atau nomor surat"
				bind:value={search_query}
				type="search"
			/>
		</label>
	</section>

	<section class="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 mx-2">
		{#each all_surah as surah (surah)}
			<SurahItem {surah} />
		{:else}
			<article class="text-center col-span-3 m-2 p-4">
				<div class="icon-auto-stories-outline text-5xl opacity-60" />
				<p>Tidak ada data surat</p>
			</article>
		{/each}
	</section>
</article>
