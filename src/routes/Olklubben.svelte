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
	import Header from '$lib/header/Header_2.svelte';
</script>

<Header />

<div class="heading" />

<section><h1>Ølklubben</h1></section>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				"Ølklubben" was a group project where we within the group had to find a common passion, and
				then base a website on that passion. Besides desiging an inviting website, one of the main
				focusses was to make a fucntioning sorting system.
			</p>
		</div>

		<div>
			<h4>The process</h4>

			<p>
				We were tasked with starting of by making the logo for our site. It was a difficiult task
				bacuse when we designed the logo, we still had no idea which "kind" of beer club we were
				about to create. <br /> But we ended up with a logo with a very universal expression, which
				we were all satisfied with. <br /> Another big task was making the sorting system. In the end
				it was made by creating a distant database, which we pulled data from into an array that we could
				use to sort the beers.
			</p>
		</div>

		<div>
			<h4>The solution</h4>
			<p>
				We ended up with this dark, cozy site with a bodega vibe, supported by the background images
				which ties the site together.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/olklubben/" target="blank">SEE THE SITE ➝</a>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GO BACK</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/olklubben/" target="blank"
			>SEE THE SITE ➝</a
		>
	</div>
</section>

<style>
	.container {
		max-width: 1300px;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 50px;
	}

	.heading {
		margin-top: 3rem;
		background-image: url('../../static/olklubben.webp');
		background-repeat: no-repeat;
		background-size: contain;
		width: 100%;
		height: 15rem;
	}

	.desk-link {
		display: none;
	}

	.links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 80px;
	}

	.se-siden {
		border: solid 4px white;
		border-image: linear-gradient(
				90deg,
				rgb(152, 6, 6) 0%,
				rgb(179, 84, 26) 27%,
				rgb(169, 159, 21) 49%,
				rgb(65, 141, 187) 67%,
				rgb(7, 53, 162) 100%
			)
			1;
		box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.449);
		padding: 0.5rem;
	}
	section {
		display: grid;
	}

	@media (min-width: 650px) {
		.container {
			grid-template-columns: 1fr 1fr 1fr;
		}

		.heading {
			background-attachment: fixed;
			position: static;
			height: 35rem;
			margin-top: 4.2rem;
		}

		.links {
			width: 1300px;
		}

		.mobil-link {
			display: none;
		}

		.desk-link {
			display: grid;
		}
	}
</style>
