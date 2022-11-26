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
		if (response.ok) {
			return response.json()
		}
		throw new Error(`Cannot fetch equran.id api`)
	} catch (/** @type {any} */ e) {
		throw error(500, e?.message ?? 'Server error')
	}
}

/** @returns {Promise<Surah[]>} */
export function find_all_surah() {
	return api('/surat')
}

/**
 * @param {number} number The number of surah
 * @returns {Promise<SurahDetail>}
 */
export function find_surah(number) {
	return api(`surat/${number}`)
}
