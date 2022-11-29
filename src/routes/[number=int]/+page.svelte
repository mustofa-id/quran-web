<script>
	import Seo from '$src/ui/seo.svelte'

	/** @type {import('./$types').PageData} */
	export let data

	let detail = data.surah_detail
	let desc_expanded = false
</script>

<Seo title="{detail.nama_latin} • {detail.nama}" description={detail.deskripsi} />

<article class="max-w-3xl mx-auto my-4 mb-32">
	<!-- todo: extract as component -->
	<section class="border border-soft rounded p-4 m-4">
		<h1 class="text-xl">
			<span>{detail.nomor}</span> &bullet;
			<span>{detail.nama_latin}</span> &bullet;
			<span class="font-ayah">{detail.nama}</span>
		</h1>

		<p class="text-sm text-neutral-700 dark:text-neutral-400">
			<span class:line-clamp-2={!desc_expanded}>
				{@html detail.deskripsi}
			</span>
		</p>

		<button
			class="text-center w-full hover:(bg-neutral-100 dark:bg-neutral-900)"
			title="{desc_expanded ? 'Kecilkan' : 'Lebarkan'} deskripsi surat"
			on:click={() => (desc_expanded = !desc_expanded)}
		>
			<div class={desc_expanded ? 'icon-expand-less' : 'icon-expand-more'} />
		</button>

		<!-- todo: more props? -->
	</section>

	<section class="sticky top-2 mx-4">
		<audio class="w-full" src={detail.audio} controls />
	</section>

	<section class="border border-soft rounded p-4 m-4 space-y-6">
		{#each detail.ayat as a, i (a)}
			<article class="text-neutral-700 dark:text-neutral-400 space-y-2">
				<p class="font-ayah text-4xl leading-loose" dir="rtl">{a.ar}</p>
				<p class="text-sm italic">{a.tr}</p>
				<p class="text-sm">{a.idn}</p>
			</article>

			<!-- todo: I forgot implement this on css way XD -->
			{#if i !== detail.ayat.length - 1}
				<hr class="border-soft" />
			{/if}
		{/each}
	</section>
</article>
