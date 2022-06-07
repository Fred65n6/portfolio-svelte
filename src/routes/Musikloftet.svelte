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

<section><h1>Musiklofet</h1></section>

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

<!-- <section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/3semester/musikloftet/" target="blank"
		>SEE THE SITE ➝</a
	>
</section> -->
<section>
	<div class="links">
		<a class="flex" sveltekit:prefetch href="/Portfolio"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ion"
				width="32"
				height="32"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 512 512"
				><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z" fill="black" /></svg
			> GO BACK</a
		>
		<a class="se-siden" href="https://skuret.eu/kea/3semester/musikloftet/" target="blank"
			>SEE THE SITE <svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ion"
				width="32"
				height="32"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 512 512"
				><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
			></a
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
		background-image: url('../../static/musikloftet.svg');
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
		display: flex;
		padding: 1rem;
		height: auto;
		background: rgba(218, 217, 217, 0.605);
		box-shadow: 2px 2px 4px;
		height: auto;
	}

	.se-siden:hover {
		background: linear-gradient(to right, rgba(196, 196, 196, 0.7), rgba(255, 255, 255, 0.7)),
			url(https://grainy-gradients.vercel.app/noise.svg);
		transform: scale(1.02);
		z-index: 2;
		position: static;
		transition: 0.5s linear;
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
