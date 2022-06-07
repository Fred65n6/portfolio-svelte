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
<h1>Vildskud</h1>

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

<section class="grid place-items-center desk-link">
	<p class="text-[1.2rem]">
		SEE THE SITE: <a href="https://vildskud.netlify.app/" target="blank">VILDSKUD </a>
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
