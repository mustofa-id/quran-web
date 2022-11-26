import { sveltekit } from '@sveltejs/kit/vite'
import unocss from 'unocss/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), unocss()]
}

export default config
