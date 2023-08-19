import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export function storable<T>(key: string, data: unknown) {
    let saved = null;

    if (browser) {
        const existing = window.localStorage.getItem(key);

        if (!existing) {
            window.localStorage.setItem(key, JSON.stringify(data));
        } else {
            saved = JSON.parse(existing);
        }

    }

    const store = writable<T>(saved || data);

    store.subscribe((value) => {
        if (browser) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    });

    return store;
}