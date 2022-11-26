<script>
	/** @type {Surah} */
	export let surah
</script>

<a class="border rounded p-4 m-2 hover:(bg-neutral-100 dark:bg-neutral-900)" href="/{surah.nomor}">
	<h1 class="text-xl">
		<div class="icon-menu-book-outline text-emerald-700 dark:text-emerald-400" />
		<span>{surah.nama_latin}</span> &bullet;
		<span class="font-ayah">{surah.nama}</span>
	</h1>
	<hr class="my-2" />
	<p class="text-sm text-neutral-700 dark:text-neutral-400 line-clamp-3">
		<span>#{String(surah.nomor).padStart(3, '0')}</span> &bullet;
		<span>{surah.jumlah_ayat} ayat</span> &bullet;
		<span>{surah.tempat_turun}</span> &bullet;
		<span>{@html surah.deskripsi}</span>
	</p>
</a>
