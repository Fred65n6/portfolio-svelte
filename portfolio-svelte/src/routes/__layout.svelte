<script>
	import Header from '$lib/header/Header.svelte';
	import Burgermenu from './Burgermenu.svelte';

	import '../app.css';
</script>

<Header />
<Burgermenu />

<main>
	<slot />
</main>

<style>
</style>
