<script>
	import { goto } from '$app/navigation'
	import Seo from '$src/ui/seo.svelte'
	import SurahItem from '$src/ui/surah-item.svelte'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Seo />

<article class="sm:max-w-3xl xl:max-w-6xl mx-auto my-4">
	<section class="sticky top-2 m-2 z-1">
		<form
			on:submit|preventDefault={async (e) => {
				// TODO: remove this submit handler when https://github.com/sveltejs/kit/issues/7251 got fixed

				/** @type {any} */
				const data = new FormData(e.currentTarget)
				const params = new URLSearchParams(data)
				await goto('?' + params, { keepFocus: true })
			}}
		>
			<label
				class="flex items-center space-x-2 border p-2 bg-light-200
				 dark:bg-dark-800 focus-within:(outline outline-1)"
			>
				<div class="icon-search" />
				<input
					class="outline-none bg-transparent w-full"
					type="search"
					name="q"
					value={data.search_query}
					placeholder="Cari nama atau nomor surat"
					on:input={async (e) => {
						// refresh data when no search query
						const { value } = e.currentTarget
						if (!value) await goto('/', { keepFocus: true })
					}}
				/>
			</label>
		</form>
	</section>

	<section class="grid sm:grid-cols-2 xl:grid-cols-3">
		{#each data.all_surah as surah (surah)}
			<SurahItem {surah} />
		{:else}
			<article class="text-center col-span-3 m-2 p-4">
				<div class="icon-auto-stories-outline text-5xl opacity-60" />
				<p>Tidak ada data surat</p>
			</article>
		{/each}
	</section>
</article>
