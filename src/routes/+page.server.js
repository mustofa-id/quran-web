import { find_all_surah } from '$src/data/api'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const all_surah = await find_all_surah()
	return { all_surah }
}
