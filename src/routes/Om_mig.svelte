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
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<title>Om mig</title>
</svelte:head>

<Header />

<div class="heading">
	<h1>OM MIG</h1>
</div>

<div class="container">
	<div class="pictures">
		<img src="om-mig.webp" alt="portæt" />
	</div>
</div>
<section id="om-mig">
	<article>
		<h1>Frederik Milland</h1>
		<div class="text">
			<p>
				Hvis man skal gøre det helt kort, så hedder jeg Frederik, jeg er 27 år, opvokset i København
				og så elsker jeg at lave design og kode hjemmesider. Hvis vi skal lidt længere ind i hvem
				jeg egentlig er, så kan jeg fortælle at det ikke altid har ligget i kortene, at jeg skulle
				uddanne mig til multimediedesigner. <br /><br /> Siden jeg var helt ung, så har musik altid været
				min store passion, og jeg har skrevet sange og spillet i forskellige bands siden jeg var 12 år
				gammel. Når man er musiker og skal udgive musik, så skal man som regel bruge en form for artwork,
				hvilket ikke altid er helt lige til selv at lave, ej heller helt billigt at købe sig fra.
			</p>
			<p>
				Men så er det godt at jeg altid har haft mantraet: <span class="font-semibold"
					>"Det har jeg ikke prøvet før, så det er jeg sikkert god til".</span
				>
				Jeg begav mig nemlig ud i selv at designe artworks til forskellige udgivelser. Bevares, de første
				forsøg var nok mindre heldige, men det blev bedre og bedre, og til sidst begyndte andre end jeg
				selv at kunne lide de designs jeg lavede, og med det blev en interesse for at lave grafisk design
				født.
				<br />
				<br /> Siden jeg startede på KEA har jeg så også forelsket mig i at kode og sætte hjemmesider
				op. Ligesom med musikken, så finder jeg noget utroligt tilfredsstillende i at bygge ting op fra
				bunden, og så elsker jeg at gøre mig umage.
			</p>
		</div>
	</article>
</section>

<div class="box">
	<div class="kompetencer">
		<h2>Kompetencer</h2>
		<ol>
			<li>- Erfaring med Photoshop, Illustrator, Premiere Pro, InDesign og Figma</li>
			<br />
			<li>
				- Erfaring med at kode html, css og javascript, samt frameworks som Svelte og Tailwind
			</li>
			<br />
			<li>- Erfaring med opsætning af hjemmesider i CMS som f.eks. wordpress</li>
		</ol>
	</div>
</div>

<section>
	<div class="kontakt">
		<h2>Kontakt</h2>
		<address>
			<div class="">
				<p>E-mail:</p>
				<a href="mailto:frederik-milland@hotmail.com">frederik-milland@hotmail.com</a>
			</div>
			<div class="">
				<p>Telefon:</p>
				<a href="tel:+4522901244">+4522901244</a>
			</div>
			<div class="">
				<p>LinkedIn</p>
				<a href="https://www.linkedin.com/in/frederik-milland-a2b671205/">https://bit.ly/3qOJCFY</a>
			</div>
		</address>
	</div>
</section>

<div class="til-toppen hover:pulsate-fwd">
	<a href="#top"> ︽<br /> Til toppen</a>
</div>

<style>
	section {
		gap: 30px;
		display: grid;
		margin-inline: 1rem;
		padding-block: 1rem;
	}
	address {
		font-style: normal;
		display: grid;
		gap: 20px;
		text-align: center;
		margin-top: 2rem;
	}

	.kontakt {
		display: grid;
		place-items: center;
		margin-top: 2rem;
	}

	address p {
		font-weight: 400;
	}
	.box {
		max-width: 95%;
	}

	@media (min-width: 650px) {
		address {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.text {
			grid-template-columns: 1fr 1fr;
		}

		.box {
			grid-template-columns: 1fr;
		}
	}
	.box {
		padding-block: 6rem;
		text-align: center;
		box-shadow: 2px 2px 4px;
		background: rgba(218, 217, 217, 0.605);
		padding: 4rem;
		display: grid;
	}

	.container {
		width: 100%;
		display: grid;
		gap: 10px;
		margin-top: 3rem;
		border-block: solid 6px;
		border-image: linear-gradient(
				90deg,
				rgb(152, 6, 6) 0%,
				rgb(179, 84, 26) 27%,
				rgb(169, 159, 21) 49%,
				rgb(65, 141, 187) 67%,
				rgb(7, 53, 162) 100%
			)
			1;
	}
	.pictures {
		object-fit: cover;
		display: flex;
	}
	article {
		margin-block: 3rem;
		max-width: 900px;
		display: grid;
		place-items: center;
	}
	.text {
		margin-top: 1rem;
		gap: 4rem;
		display: grid;
	}

	li {
		font-weight: 100;
		font-size: 1.1rem;
	}

	address {
		font-size: 1.1rem;
	}
</style>
