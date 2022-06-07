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
<h1 class="my-4">Vildskud</h1>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				This group project had two main focusses. Making a revolutionary redesign and sustainable
				design. We had to redesign the existing site for the theater festival "Vildskud", but the
				design also had to be sustainable, which meant that every site couldn't take up more than
				0.5mb of space.
			</p>
		</div>

		<div>
			<h4>THE PROCESS</h4>

			<p>
				In our group we chose to go all out on the sustainable design, so we chose not to use any
				pictures or animations at all, and build our design around vector graphics and different
				fonts. We did that to challenge ourselves a bit and see if we were able to make an exciting
				website without pictures. We used strong colors and fonts in order to create a visual
				identity, and used the "color blobs" to create coherence between to pages.
			</p>
		</div>

		<div>
			<h4>The solution</h4>

			<p>
				The site was coded using sveltekit which is a hybrid bewteen svelte and tailwind, and my
				main area of responsibility was setting up the site. Besides that I also designed the new
				logo, which we based a lot of the visual identuty on.
			</p>
		</div>
	</div>
</section>

<!-- <section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://vildskud.netlify.app/" target="blank"
		>SEE THE SITE <svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--ic"
			width="32"
			height="32"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><path fill="black" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" /></svg
		></a
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
		<a class="se-siden" href="https://vildskud.netlify.app/" target="blank"
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
		background-image: url('../../static/hero_bg_2.svg');
		background-repeat: no-repeat;
		background-size: contain;
		width: 100%;
		height: 15rem;
	}

	.links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 300px;
	}

	.se-siden {
		display: flex;
		padding: 0.6rem;
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
	}
</style>
