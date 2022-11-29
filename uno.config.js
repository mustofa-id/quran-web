import {
	defineConfig,
	extractorSvelte,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerDirectives,
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
	transformers: [transformerVariantGroup(), transformerDirectives()],
	shortcuts: [
		// statics
		['bg-default', 'bg-light-400 dark:bg-dark-800'],
		['text-default', 'text-neutral-700 dark:text-neutral-300'],
		['border-soft', 'border-neutral-300 dark:border-neutral-600'],
		// dynamics
		[/^icon-(.*)$/, ([, c]) => `i-material-symbols-${c}`]
	]
})
