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

<section><h1>Toast no.9</h1></section>

<section>
	<div class="container">
		<div>
			<h4>Opgaven</h4>
			<p>
				Dette var eksamensprojektet på 2. semester. Det var et stort projekt, hvor vi kom ud i alle
				afkroge af det at være Multimedie Designer. Vores case var den lille charmerende toast café
				'Toast no.9', som vi skulle udvikle en hjemmeside for, samt at producere videomateriale og
				en so-me strategi.
			</p>
		</div>

		<div>
			<h4>Processen</h4>
			<p>
				At udfylde alle kravene der var i denne opgave, var en stor mundfuld, og krævede at vi
				udeligerede ansvarsområder i gruppen. Mit hovedansvarsområde var design og opsætning af
				hjemmesiden. <br /> I designprocessen var vi meget inspirerede af 90'er stil og udtryk. Vi vil
				også gerne have etr let og legende udtryk, derfor valgte vi at tegne forskellige objekter fra
				caféen, og sætte dem ind på siden som grafik.
			</p>
		</div>

		<div>
			<h4>Løsningen</h4>
			<p>
				Den endelige løsning blev et hyggeligt, gult og lyserødt samsurium af tegninger og gakkede
				elementer, som afspejlede caféen og ejeren Boris personlighed. Sitet blev præsenteret for
				ejeren af 'Toast no.9' som var utrolig tilfreds, med den visuelle identitet vi havde skabt
				for hans café.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/toastno9" target="blank">SE SIDEN ➝</a>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GÅ TILBAGE</a>
		<a class="se-siden mobil-link" href="https://skuret.eu/kea/toastno9" target="blank"
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
		background-image: url('../../static/toast.webp');
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
