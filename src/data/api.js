import { error } from '@sveltejs/kit'

/**
 * @template T
 * @param {string} path
 * @returns {Promise<T>}
 */
async function api(path) {
	try {
		// todo: find out if the server supports `cache-control`
		const url = new URL(`api/${path}`, `https://equran.id`)
		const response = await fetch(url)
		const json = await response.json()
		if (!response.ok) {
			throw error(response.status, json?.message)
		}
		return json
	} catch (/** @type {any} */ e) {
		throw error(e.status ?? 500, e.body ?? 'Server error')
	}
}

/** @returns {Promise<Surah[]>} */
export function find_all_surah() {
	return api('surat').then((s) => s.map(fix_description))
}

/**
 * @param {number} number The number of surah
 * @returns {Promise<SurahDetail>}
 */
export function find_surah(number) {
	// surah number will only between 1 and 114
	if (number < 1 || number > 114) {
		throw error(400, `Nomor surat tidak valid. Al-Quran terdiri dari 144 surat.`)
	}
	return api(`surat/${number}`).then(fix_description)
}

/**
 * Workaround for build error when prerendering pages
 * caused by `deskripsi` from API that html formatted
 * text and contains non-external link but not written
 * as external link
 *
 * @param {Surah} surah
 * @returns {any}
 */
function fix_description(surah) {
	const deskripsi = surah.deskripsi.replace(`<a href="s002a001.htm">[10)</a>`, '10')
	return { ...surah, deskripsi }
}
