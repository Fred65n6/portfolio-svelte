<script>
	import Header from '$lib/header/Header.svelte';
	import Burgermenu from './Burgermenu.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';
</script>

<Header />
<Burgermenu />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
