import { writable } from 'svelte/store';
import { storable } from './storable';

type Appointment = {
    id: string;
    door: string;
};

export const visible = writable(false);

function createAppointments() {
    const store = storable<Appointment[]>('appointments', []);

    return {
        ...store,
        add: (item: Appointment) => {
            store.update((old) => [item, ...old]);
        },
        remove: (id: string) => store.update((old) => old.filter(item => item.id !== id)),
        clear: () => store.set([])
    };
}

export const appointments = createAppointments();

// export const size = derived(cart, (cart) => cart.length);

// export const subtotal = derived(cart, (cart) =>
//     cart.reduce((total, item) => (total = { ...total, value: (total.value += item.price.value) }), {
//         value: 0,
//         currency: 'EUR'
//     })
// );