import { find_all_surah } from '$src/data/api'

/**
 * Resources from the API are likely to change infrequently,
 * so I thought to mark this page `prerender`ed for now.
 */
export const prerender = true

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const all_surah = await find_all_surah()
	return { all_surah }
}
