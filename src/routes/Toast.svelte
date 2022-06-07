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

<h1 class="my-4">Toast no.9</h1>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				This was the exam project on the 2. semester. It was a big project where we got to work with
				every aspect of being a multimedia designer. The case that my group and I chose was the
				little charming café "Toast no.9" which we had to help by making a website, creating video
				content, and outlining a social media plan for.
			</p>
		</div>

		<div>
			<h4>The process</h4>

			<p>
				It was a big mouthfull to meet the requirements of this assignment, so it was key to
				delegate different areas of responsibility. My main area of responsibility, along side a
				fellow student, was designing and setting up the site. During the design process we were
				very inspired by 90's styles which came to show in the logo design, which was inspired by
				MTV. We also wanted to keep it light and playfull, which is why we chose to draw different
				artefacts from the café, and include on to site.
			</p>
		</div>

		<div>
			<h4>The solution</h4>

			<p>
				The final solution became this playfull, yellow and pink website filled with whacky elements
				that reflect the owner's personality. We presented the site for the owner, who was very
				satisfied with the visual identity that we created for him.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<p class="text-[1.2rem]">
		SEE THE SITE: <a href="https://skuret.eu/kea/toastno9" target="blank">TOAST NO. 9 </a>
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
