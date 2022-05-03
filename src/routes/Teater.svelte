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

<section><h1>Teater Grob</h1></section>

<section>
	<div class="container">
		<div>
			<h4>The assignment</h4>

			<p>
				This was a group project where we had to make a campaignsite, which purpose was to get young
				people in Copenhagen to buy an annual pass to "Teater Grob". The site had to include a clear
				concept as well as a campaign video and videos for social media.
			</p>
		</div>

		<div>
			<h4>The process</h4>

			<p>
				We started of the project by brainstorming ideas for a slogan which we could base our
				concept on. After a lot of iterations we ended up with a slogan which translates to "Do you
				also miss more drama in your everyday life?". We also came up with the idea that the
				campaign should include a bid to gather Nørrebro, which is why we came up with the vouchers
				that give you a discount in select local buisnesses when you use your annual pass.
			</p>
		</div>

		<div>
			<h4>The solution</h4>

			<p>
				The final solution, is a campaign site build in wordpress. My main area of responsibility
				was desiging and setting up the website. The concept was presented for some representatives
				from "Teater Grob" who were very delighted with our solution.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/teater_grob/" target="blank">SEE THE SITE ➝</a>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GO BACK</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/teater_grob/" target="blank"
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
		background-image: url('../../static/grob.webp');
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
