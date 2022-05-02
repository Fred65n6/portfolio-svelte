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
			<h4>Opgaven</h4>
			<p>
				Dette er artworks som er lavet for det band, som jeg spiller i ved siden af at læse
				multimediedesign. Alle artworks som vi har brugt gennem tiden er lavet af mig, og det var
				også i arbejdet med dette, at min interesse for grafisk design blev vakt.
			</p>
		</div>

		<div>
			<h4>Processen</h4>
			<p>
				Der er mange forskellige processer i at lave artworks. Som regel starter det med at jeg
				snakker med de andre bandmedlemmer, om hvilke tanker og følelser den sang eller det værk,
				som jeg laver artwork til tænder i dem. <br />
				Derefter tager jeg alle de ting med og begynder at tegne skitser i hånden. Når jeg har nogle
				forskellige oplæg så begynder jeg at prøve at sætte dem op i Photoshop. Hvis jeg skal bruge fotos,
				så plejer jeg som regel at finde nogle placeholder fotos, indtil jeg kan få taget nogle selv.
			</p>
		</div>

		<div>
			<h4>Løsningen</h4>
			<p>
				I sidste ende er vi endt med nogle flotte artworks, som vi alle er meget glade for. De har
				alle en lettere rå stil, som også gerne skulle afspejle musikken.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/1semester/artworks/" target="blank"
		>SE ARTWORKS ➝</a
	>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 TILBAGE TIL PORTFOLIO</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/1semester/artworks/" target="blank"
			>SE ARTWORKS ➝</a
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
