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

<section><h1>Artworks</h1></section>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				These are some of the artworks that I created for the band I play in when I'm not designing
				websites. All the artworks that we have ever used are created by me, and it was making these
				artworks that sparked my interest in digital design.
			</p>
		</div>

		<div>
			<h4>the Process</h4>

			<p>
				There are a lot of different processes when making artworks. I usually start of by talking
				with the other band members and bouncing ideas off of them. <br /> Then I start handdrawing mocks-ups
				with different ideas, and when I have something I like, I start trying to set it up in photoshop.
				If I have an idea where I need certain photos, I use placeholders untill I'm able to take the
				pictures myself.
			</p>
		</div>

		<div>
			<h4>the solution</h4>

			<p>
				In the end we ended up with some nice artworks, which we all love. They all have this raw
				but also elegant vibe, which should reflect the music.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/1semester/artworks/" target="blank"
		>SEE THE ARTWORKS ➝</a
	>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GO BACK</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/1semester/artworks/" target="blank"
			>SEE THE ARTWORKS➝</a
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
		background-image: url('../../static/artworks.webp');
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
