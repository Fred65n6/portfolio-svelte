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

<h1 class="my-4">Ølklubben</h1>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				"Ølklubben" was a group project where we within the group had to find a common passion, and
				then base a website on that passion. Besides desiging an inviting website, one of the main
				focusses was to make a functioning sorting system.
			</p>
		</div>

		<div>
			<h4>The process</h4>

			<p>
				We were tasked with starting of by making the logo for our site. It was a difficiult task
				becuse when we designed the logo, we still had no idea which "kind" of beer club we were
				about to create. <br /> But we ended up with a logo with a very universal expression, which
				we were all satisfied with. <br /> Another big task was making the sorting system. In the end
				it was made by creating a distant database, which we pulled data from into an array that we could
				use to sort the beers.
			</p>
		</div>

		<div>
			<h4>The solution</h4>
			<p>
				We ended up with this dark, cozy site with a bodega vibe, supported by the background image
				which tie the site together.
			</p>
		</div>
	</div>
</section>
<!-- 
<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/olklubben/" target="blank">SEE THE SITE ➝</a>
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
		<a class="se-siden" href="https://skuret.eu/kea/olklubben/" target="blank"
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
