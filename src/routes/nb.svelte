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
<h1 class="my-4">NØRREBRO BRYGHUS</h1>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				This unsolicited redesign of Nørrebro Bryghus' website was the exam project of our third
				semester at KEA. The assignment was fairly simple, find a site that you think you could
				improve by using all the design skills that we've learned throughout the semester.
			</p>
		</div>

		<div>
			<h4>THE PROCESS</h4>

			<p>
				In this project we used the double diamond method, which consist of the four phases:
				discover, define, develop and deliver. This mean that we went through a lot of research and
				various user tests, in order to discover which parts of the exsisting site that we should
				focus on improving, before we started comming up with new designs. In the end we chose to
				focus especially on the booking site, the event calender and the webshop.
			</p>
		</div>

		<div>
			<h4>The solution</h4>

			<p>
				We used sveltekit to code the website, which is mainly component based, and made for an easy
				workflow. I was mainly responsible for coding the website and adjusting it along the way,
				when we got new data from user tests. <br /> We tried to make the new design lighter than the
				original one, which is why we used a lot more of white space. We also focused on using the flower,
				which the brewery uses on their beer labels, as a fitfh element that is consitent throughout
				the website.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<p class="text-[1.2rem]">
		SEE THE SITE: <a href="https://nb-bryghus.netlify.app/" target="blank">NB BRYGHUS</a>
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
		background-image: url('../../static/nb.svg');
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
