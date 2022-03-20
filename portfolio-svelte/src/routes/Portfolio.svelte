<script context="module">
	import Footer from './Footer.svelte';
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
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="heading" id="top">
	<h1>PORTFOLIO</h1>
</div>

<section id="portfolio">
	<div class="card ">
		<div class="container">
			<img src="musikloftet.webp" alt="Musikloftet" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/3semester/musikloftet/" target="_blank"
						><h4>WEBSITE:</h4>
						<h3>MUSIKLOFTET</h3></a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="kramer.webp" alt="Kramer" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/3semester/font_site" target="_blank"
						><h4>DESIGN:</h4>
						<h3>DISPLAY FONT</h3></a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="card md:col-span-2">
		<div class="container">
			<img src="artworks.webp" alt="Artworks" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/1semester/artworks/" target="_blank"
						><h4>DESIGN:</h4>
						<h3>Artworks</h3></a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="toast.webp" alt="toast no.9" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/toastno9/" target="_blank"
						><h4>website:</h4>
						<h3>Toast no.9</h3></a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="grob.webp" alt="grob" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/teater_grob/" target="_blank"
						><h4>kampagnesite:</h4>
						<h3>teater grob</h3></a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="olklubben.webp" alt="Ølklubben" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/olklubben/" target="_blank"
						><h4>website:</h4>
						<h3>ølklubben</h3></a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img class="" src="spil.webp" alt="grob" />
			<div class="overlay">
				<div class="text">
					<a
						class="desk-link"
						href="https://skuret.eu/kea/1semester/04_animation/spil/"
						target="_blank"
						><h4>animation:</h4>
						<h3>spil</h3></a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="til-toppen hover:pulsate-fwd">
	<a href="#top"> ︽<br /> Til toppen</a>
</div>

<Footer />

<style>
	section {
		padding-block: 3rem;
		gap: 30px;
		display: grid;
		margin-inline: 1rem;
	}
	@media (min-width: 650px) {
		section {
			align-items: center;
			width: 1300px;
			gap: 10px;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}

		.card:hover {
			transform: scale(1.02);
			z-index: 2;
			position: static;
			transition: 0.5s linear;
		}

		.container:hover .overlay {
			opacity: 1;
		}
	}

	a {
		text-align: center;
	}
	.container {
		position: relative;
	}

	img {
		box-shadow: 2px 2px 4px;
	}

	.desk-link {
		color: black;
	}
	.card {
		display: flex;
	}
	.container {
		position: relative;
		width: 100%;
	}
	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: 0.5s ease;
		background: linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
			url(https://grainy-gradients.vercel.app/noise.svg);
	}

	.text {
		color: white;
		font-weight: 900;
		position: absolute;
		text-transform: uppercase;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: left;
	}
</style>
