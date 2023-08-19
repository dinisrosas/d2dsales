<script>
	import { appointments } from '$lib/store';
</script>

<ul>
	{#each $appointments as appointment}
		<li>
			<div>
				<div>{appointment.id}</div>
				<div>{appointment.door}</div>
			</div>
		</li>
	{/each}
</ul>
