import {
	defineConfig,
	extractorSvelte,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	extractors: [extractorSvelte],
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		}),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: 'Figtree',
				ayah: [{ name: 'Amiri Quran' }, { name: 'serif', provider: 'none' }]
			}
		})
	],
	transformers: [transformerVariantGroup()],
	shortcuts: [[/^icon-(.*)$/, ([, c]) => `i-material-symbols-${c}`]]
})
