<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import Header from '$lib/header/Header.svelte';
</script>

<Header />

<div class="heading" />

<section>
	<div class="container">
		<div>
			<h4>Opgaven</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
				voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
				architecto eos quibusdam nostrum.
			</p>
		</div>

		<div>
			<h4>Udfordringer og proces</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
				voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
				architecto eos quibusdam nostrum.
			</p>
		</div>

		<div>
			<h4>Løsning</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus? Aspernatur illum illo
				atque quia, temporibus aliquam magnam expedita dignissimos obcaecati adipisci voluptatum
				eaque, voluptate sapiente necessitatibus cumque ipsa aperiam voluptas harum omnis.
			</p>
		</div>
	</div>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GÅ TILBAGE</a>
		<a class="se-siden" href="https://skuret.eu/kea/1semester/04_animation/spil/" target="blank"
			>SE SIDEN ➝</a
		>
	</div>
</section>

<style>
	.container {
		position: relative;
		max-width: 1100px;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
	}

	.heading {
		margin-top: 4.2rem;
		position: static;
		background-image: url('../../static/spil.webp');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: contain;
		height: 35rem;
		width: 100%;
	}

	.links {
		width: 1100px;
		display: flex;
		justify-content: space-between;
	}

	.se-siden {
		border: solid 1px black;
		border-radius: 12px;
		padding: 0.5rem;
	}

	section {
		display: grid;
	}
</style>
