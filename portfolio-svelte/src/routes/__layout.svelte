<script>
	import Header from '$lib/header/Header.svelte';
	import Burgermenu from './Burgermenu.svelte';

	import '../app.css';
</script>

<Burgermenu />
<Header />

<main>
	<slot />
</main>

<style>
</style>
