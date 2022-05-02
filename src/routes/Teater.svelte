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
			<h4>Opgaven</h4>
			<p>
				Dette var et gruppe projekt, der handlede om at lave et kampagnesite, som skulle lokke flere
				unge til at købe årskort til teater Grob. <br /> Sitet skulle udover et tydeligt koncept også
				indholde en kampagnevideo, samt vidoer til sociale medier.
			</p>
		</div>

		<div>
			<h4>Processen</h4>
			<p>
				Vi startede projektet ud med at brainstorme idéer til et slogan, som vi kunne basere vores
				koncept på. efter mange iterationer endte vi på sloganet "mangler du også mere drama i din
				hverdag?". Sloganet lagde grund for vores kampagnevideoer, som viser forskellige folk, der
				måske savner lidt drama i deres liv. Udover kampagne videoerne, så fandt vi også på at
				kampagnen også skulle handle om at samle Nørrebro, med Teater Grob som centrum, så hvis man
				køber et årskort, så ville man også få rabatter hos forskellige klassiske nørrebro
				forretninger, som feks. BRUS og FRIHEDEN.
			</p>
		</div>

		<div>
			<h4>Løsningen</h4>
			<p>
				Den endelige løsning, blev et kampagnesite, bygget op i wordpress. I dette projekt som jo
				var et gruppeprojekt, havde jeg hovedsagligt ansvar for designet og opsætningen af
				kampagnesitet. Sitet og vidoerne blev præsenteret for repræsentanter fra Teater Grob, som
				var meget positive overfor hele konceptet.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/teater_grob/" target="blank">SE SIDEN ➝</a>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GÅ TILBAGE</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/teater_grob/" target="blank"
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
		border-radius: 20px;
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
