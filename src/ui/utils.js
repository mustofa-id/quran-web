import { browser } from '$app/environment'
import { writable } from 'svelte/store'

/**
 * Persistance store. Only support localStorage for now.
 *
 * @template T
 * @param {string} name
 * @param {T} initial
 */
export function persistable(name, initial) {
	const can_persist = browser && typeof localStorage !== 'undefined'
	if (can_persist) {
		const stored_value = localStorage.getItem(name)
		if (stored_value) {
			// only support json for now
			initial = JSON.parse(stored_value)
		}
	}

	const { subscribe, set, update } = writable(initial, () => {
		if (!can_persist) return
		const listener = (/** @type {StorageEvent} */ e) => {
			if (e.key === name && e.newValue) {
				set(JSON.parse(e.newValue))
			}
		}
		window.addEventListener('storage', listener)
		return () => window.removeEventListener('storage', listener)
	})

	return {
		/** @param {T} value */
		set(value) {
			if (can_persist) {
				const value_to_store = JSON.stringify(value)
				localStorage.setItem(name, value_to_store)
			}
			set(value)
		},
		subscribe,
		update
	}
}
