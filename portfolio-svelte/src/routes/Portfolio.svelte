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
		<div class="text-box">
			<h2>Musikloftet</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
		<div class="container">
			<img src="musikloftet.webp" alt="Musikloftet" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/3semester/musikloftet/" target="_blank">Se siden</a>
				</div>
			</div>
			<div class="mobile-text-box">
				<h2>Musikloftet</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/3semester/musikloftet/" target="_blank"
					>Se siden</a
				>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="artworks.webp" alt="Artworks" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/1semester/artworks/" target="_blank">Se siden</a>
				</div>
			</div>
			<div class="mobile-text-box">
				<h2>Artworks</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/1semester/artworks/" target="_blank">Se siden</a
				>
			</div>
		</div>
		<div class="text-box">
			<h2>Artworks</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
	</div>

	<div class="card ">
		<div class="text-box">
			<h2>Toast no.9</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
		<div class="container">
			<img src="toast.webp" alt="toast no.9" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/toastno9/" target="_blank">Se siden</a>
				</div>
			</div>
			<div class="mobile-text-box">
				<h2>Toast no.9</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/1semester/artworks/" target="_blank">Se siden</a
				>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="kramer.webp" alt="Kramer" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/3semester/font_site" target="_blank">Se siden</a>
				</div>
			</div>

			<div class="mobile-text-box">
				<h2>Display font</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/1semester/artworks/" target="_blank">Se siden</a
				>
			</div>
		</div>
		<div class="text-box">
			<h2>Display font</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
	</div>

	<div class="card ">
		<div class="text-box">
			<h2>Teater Grob</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
		<div class="container">
			<img src="grob.webp" alt="grob" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/teater_grob/" target="_blank">Se siden</a>
				</div>
			</div>
			<div class="mobile-text-box">
				<h2>Teater Grob</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/teater_grob/" target="_blank">Se siden</a>
			</div>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="olklubben.webp" alt="Ølklubben" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/olklubben/" target="_blank">Se siden</a>
				</div>
			</div>

			<div class="mobile-text-box">
				<h2>Ølklubben</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/olklubben/" target="_blank">Se siden</a>
			</div>
		</div>
		<div class="text-box">
			<h2>Ølklubben</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
	</div>

	<div class="card ">
		<div class="text-box">
			<h2>Animation</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
				consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
				reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
				Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
				quaerat quasi non beatae.
			</p>
		</div>
		<div class="container">
			<img src="spil.webp" alt="grob" />
			<div class="overlay">
				<div class="text">
					<a href="https://skuret.eu/kea/1semester/04_animation/spil/" target="_blank">Se siden</a>
				</div>
			</div>
			<div class="mobile-text-box">
				<h2>Animation</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur quis error nulla
					consequatur, laborum quia quisquam officiis esse velit distinctio dignissimos sapiente
					reiciendis consequuntur vitae consectetur voluptas unde quae nam rerum recusandae saepe!
					Earum, ex! Pariatur fugiat iure corrupti? Tempora harum dolores expedita reiciendis sed
					quaerat quasi non beatae.
				</p>
				<a class="link" href="https://skuret.eu/kea/1semester/04_animation/spil/" target="_blank"
					>Se siden</a
				>
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
		padding-block: 6rem;
	}
	.container {
		position: relative;
	}

	.til-toppen {
		display: grid;
		place-items: center;
		text-align: center;
		text-transform: uppercase;
		font-size: 1.5rem;
		padding-block: 4rem;
	}

	.mobile-text-box {
		display: grid;
		padding: 2rem;
		height: auto;
		background: rgba(37, 36, 47, 0.605);
	}

	.text-box {
		display: grid;
		padding: 2rem;
		height: auto;
		background: rgba(37, 36, 47, 0.605);
	}

	.link {
		margin-top: 2rem;
		justify-self: center;
		text-transform: uppercase;
		padding: 1rem;
		border-radius: 12px;
		background-color: rgb(30, 30, 30);
	}

	.card {
		margin: 2rem;
		border: solid 2px white;
		box-shadow: 4px 4px 2px;
		border-image: linear-gradient(
				90deg,
				rgba(255, 0, 0, 0.4) 0%,
				rgba(204, 87, 14, 0.4) 27%,
				rgba(176, 174, 22, 0.4) 49%,
				rgba(111, 216, 221, 0.4) 67%,
				rgba(2, 80, 255, 0.4) 100%
			)
			1;
	}

	/* overlay text */

	@media (max-width: 650px) {
		.text {
			display: none;
		}

		.text-box {
			display: none;
		}
	}

	@media (min-width: 650px) {
		.link {
			display: none;
		}

		.mobile-text-box {
			display: none;
		}

		.card {
			display: flex;
		}
		section {
			align-items: center;
			width: 1400px;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			gap: 50px;
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
			background: linear-gradient(
				90deg,
				rgba(2, 80, 255, 0.3) 0%,
				rgba(111, 216, 221, 0.3) 27%,
				rgba(176, 174, 22, 0.3) 49%,
				rgba(204, 87, 14, 0.3) 67%,
				rgba(255, 0, 0, 0.3) 100%
			);
		}

		.container:hover .overlay {
			opacity: 1;
		}

		.text {
			color: white;
			font-size: 3rem;
			font-weight: 900;
			position: absolute;
			text-transform: uppercase;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			text-align: center;
		}
	}
</style>
