/** @type {import('./$types').PageLoad} */
export async function load({ url, data }) {
	const search_query = url.searchParams.get('q')
	return {
		search_query,
		all_surah: search_query ? data.all_surah.filter(filter_predicate(search_query)) : data.all_surah
	}
}

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
