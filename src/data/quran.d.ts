interface Surah {
	nomor: number
	nama: string
	nama_latin: string
	jumlah_ayat: number
	tempat_turun: string
	arti: string
	deskripsi: string
	audio: string
}

interface Ayah {
	id: number
	surah: number
	nomor: number
	ar: string
	tr: string
	idn: string
}

interface SurahDetail extends Surah {
	status: boolean
	ayat: Ayah[]
	surat_selanjutnya: Surah
	surat_sebelumnya: Surah
}
