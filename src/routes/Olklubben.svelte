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
			<h4>Opgaven</h4>
			<p>
				Ølklubben var et projekt hvor vi i en mindre gruppe, skulle finde en fællespassion, og
				derefter lave et site, med den passion i centrum. Et af formålene ved dette projekt var at
				lave et flot site, som skulle indeholde en eller anden form for filtrering af nogle
				produkter. Vi valgte derfor at lave en hjemmeside for en fiktiv ølklub.
			</p>
		</div>

		<div>
			<h4>Processen</h4>
			<p>
				I dette projekt brugte vi lang tid på at lave et logo til vores site. Det var en udfordring,
				fordi vi skulle lave logoet, inden vi havde nogen anelse om hvordan udtrykket for vores
				fiktive ølklub skulle være. Vi endte dog med et design som vi følte var meget universelt. <br
				/> En af de store opgaver i dette projekt, var at lave en filtrering. Filtreringen blev lavet
				igennem en database, som vi trak data ind fra i et array, som vi kunne sortere i.
			</p>
		</div>

		<div>
			<h4>Løsningen</h4>
			<p>
				Det endelige site, endte med at få en lidt dunkel og hyggelig bodega stemning, støttet op af
				baggrundsbilledet som er gennemgående på sitet.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/olklubben/" target="blank">SE SIDEN ➝</a>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GÅ TILBAGE</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/olklubben/" target="blank"
			>SE SIDEN ➝</a
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
		border: solid 2px white;
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
			width: 1100px;
		}

		.mobil-link {
			display: none;
		}

		.desk-link {
			display: grid;
		}
	}
</style>
