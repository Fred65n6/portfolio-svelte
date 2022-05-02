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

<section><h1>Musiklofet</h1></section>

<section>
	<div class="container">
		<div>
			<h4>Opgaven</h4>
			<p>
				I dette projekt skulle vi designe en hjemmeside, for en fiktiv klient, der udlejer
				øvelokaler. Projektet handlede først og fremmest om at lave et indbyende design, samt at få
				en masse forskellige informationer ind på siden.
			</p>
		</div>

		<div>
			<h4>Processen</h4>
			<p>
				Med dette projekt fik vi vores første rigtige møde med Figma som vi brugte til at lave
				prototyper samt at udarbejde designsystemer. Derudover skulle vi bruge framworket Tailwind
				til at kode siden, som også var en hel ny måde at kode på.
			</p>
		</div>

		<div>
			<h4>Løsning</h4>
			<p>
				I vores endelige løsning valgte vi at bruge den røde farve til at skabe en visuel identitet,
				samt at strømline billederne ved at trække lidt farve ud af dem, og så give dem den her lidt
				rå grynede effekt. Sitet indeholder information om både medlemspriser, hvem Musikloftet er
				samt et helt flow for hvordan man booker et lokale.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://skuret.eu/kea/3semester/musikloftet/" target="blank"
		>SE SIDEN ➝</a
	>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GÅ TILBAGE</a>
		<a
			class="se-siden mobil-link"
			href="https://skuret.eu/kea/3semester/musikloftet/"
			target="blank">SE SIDEN ➝</a
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
		background-image: url('../../static/musikloftet.svg');
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
