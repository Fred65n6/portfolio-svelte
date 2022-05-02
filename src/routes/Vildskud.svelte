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

<section><h1>Vildskud</h1></section>

<section>
	<div class="container">
		<div>
			<h4>Opgaven</h4>
			<p>
				Dette gruppe projekt havde to overskrifter: revoltionært redesign og bæredygtigt design. Vi
				skulle redesigne den eksisterende site for scenekunst festivallen 'Vildskud'. Samtidig
				skulle vores design også være bæredygtigt, så de enkelte sider måtte ikke fylde mere end 0.5
				mb, hvilket satte en del begrænsninger.
			</p>
		</div>

		<div>
			<h4>Processen</h4>
			<p>
				I vores gruppe valgte vi at gå "all out" på bæredygtigheden, og ikke bruge nogle billeder
				eller animationer, men kun bygge vores side på vector grafik og fonte. Det gjorde vi
				hovedsagligt for at udfordre os selv, og se om vi kunne lave et interessant design og nogle
				billeder overhovedet. Vi brugte nogle stærke farver og fonte til at skabe en visuel
				identitet og farveklatter til at skabe et sammenhæng på siderne.
			</p>
		</div>

		<div>
			<h4>Løsningen</h4>
			<p>
				Selve sitet er blevet kodet i SvelteKit, som er en hybrid imellem Svelte og Tailwind. Mit
				eget hovedansvarsområde i dette projekt var opsætningen af sitet, og så designede jeg det
				nye logo, som vi har brugt til at støtte op, om den nye visuelle identitet.
			</p>
		</div>
	</div>
</section>

<section class="grid place-items-center desk-link">
	<a class="se-siden" href="https://vildskud.netlify.app/" target="blank">SE SIDEN ➝</a>
</section>

<section>
	<div class="links">
		<a sveltekit:prefetch href="/Portfolio">🠔 GÅ SIDEN</a>
		<a class="se-siden mobil-link" href="https://vildskud.netlify.app/" target="blank"
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
		background-image: url('../../static/hero_bg_2.svg');
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
