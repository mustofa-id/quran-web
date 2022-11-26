import { find_surah } from '$src/data/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const surah_detail = await find_surah(+params.number)
	return { surah_detail }
}
