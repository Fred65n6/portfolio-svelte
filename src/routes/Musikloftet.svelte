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

<h1 class="my-4">Musiklofet</h1>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				In this project we had to design a website for a fictitious client who rents out rehearsel
				spaces. First and foremost the project was about making an inviting design as well as
				including a lot of different information.
			</p>
		</div>

		<div>
			<h4>The process</h4>

			<p>
				In this project we had our first real meeting with Figma which we used to make the
				prototypes as well as developing design systems. Other than that we also had to used the
				framework Tailwind to code the site, which was also a first.
			</p>
		</div>

		<div>
			<h4>The solution</h4>

			<p>
				In our final solution we chose to use the red color to create a visual identity, as well as
				we chose to streamline the pictures by taking out some saturation and giving them a kind of
				raw grainy look. The site contains different information such as pricing, who "Musiklofet"
				is, and a flow for booking rooms.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<p class="text-[1.2rem]">
		SEE THE SITE: <a href="https://skuret.eu/kea/3semester/musikloftet/" target="blank"
			>MUSIKLOFTET
		</a>
	</p>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio"> ❮ GO BACK</a>
		<!-- <a class="se-siden" href="https://vildskud.netlify.app/" target="blank">SEE THE SITE </a> -->
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
		background-image: url('../../static/musikloftet.svg');
		background-repeat: no-repeat;
		background-size: contain;
		width: 100%;
		height: 15rem;
	}

	.links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 80px;
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

		.desk-link {
			display: grid;
		}
	}
</style>
