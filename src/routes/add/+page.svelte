<script>
	import { appointments } from '$lib/store';
	import cuid from 'cuid';

	let door = '';

	function add() {
		appointments.add({ id: cuid(), door });
		door = '';
	}
</script>

<input type="text" bind:value={door} placeholder="Door #" />
<button on:click={add}>Add Appointment</button>
<button on:click={appointments.clear}>Clear Appointments</button>