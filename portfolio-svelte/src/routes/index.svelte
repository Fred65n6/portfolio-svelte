<script context="module">
	export const prerender = true;
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>FM Design</title>
</svelte:head>

<Hero />

<!-- <section id="forside">
	<div id="box-1" class="spacer ">
		<div class="text-box ">
			<a sveltekit:prefetch href="/Portfolio">
				<h2>Portfolio</h2>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero iste repudiandae rem ducimus
				hic ad cum animi iure facere ea porro itaque nemo quos a vel, similique suscipit totam architecto
				repellat! Fugiat deserunt, dolore mollitia consequuntur reprehenderit aspernatur nisi atque veritatis
				reiciendis quasi.<span>➝</span>
			</a>
		</div>
	</div>

	<div id="box-2" class="spacer">
		<div class="text-box ">
			<a sveltekit:prefetch href="/Om_mig">
				<h2>Om mig</h2>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero iste repudiandae rem ducimus
				hic ad cum animi iure facere ea porro itaque nemo quos a vel, similique suscipit totam architecto
				repellat! Fugiat deserunt, dolore mollitia consequuntur reprehenderit aspernatur nisi atque veritatis
				reiciendis quasi.<span>➝</span>
			</a>
		</div>
	</div>
</section> -->

<section id="portfolio">
	<div class="card ">
		<div class="container">
			<img src="musikloftet.webp" alt="Musikloftet" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/3semester/musikloftet/" target="_blank"
						>MUSIKLOFTET</a
					>
				</div>
			</div>
			<h4>Website</h4>
			<h3>Musikloftet</h3>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="kramer.webp" alt="Kramer" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/3semester/font_site" target="_blank"
						>DISPLAY FONT</a
					>
				</div>
			</div>
			<h4>Design</h4>
			<h3>Musikloftet</h3>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="artworks.webp" alt="Artworks" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/1semester/artworks/" target="_blank"
						>ARTWORKS</a
					>
				</div>
			</div>
			<h4>Design</h4>
			<h3>Artworks</h3>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="toast.webp" alt="toast no.9" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/toastno9/" target="_blank">TOAST NO.9</a>
				</div>
			</div>
			<h4>Website</h4>
			<h3>Toast no.9</h3>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="grob.webp" alt="grob" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/teater_grob/" target="_blank"
						>TEATER GROB</a
					>
				</div>
			</div>
			<h4>Kampagnesite</h4>
			<h3>Teater Grob</h3>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="olklubben.webp" alt="Ølklubben" />
			<div class="overlay">
				<div class="text">
					<a class="desk-link" href="https://skuret.eu/kea/olklubben/" target="_blank">ØLKLUBBEN</a>
				</div>
			</div>
			<h4>Website</h4>
			<h3>Ølklubben</h3>
		</div>
	</div>

	<div class="card ">
		<div class="container">
			<img src="spil.webp" alt="grob" />
			<div class="overlay">
				<div class="text">
					<a
						class="desk-link"
						href="https://skuret.eu/kea/1semester/04_animation/spil/"
						target="_blank">ANIMATION</a
					>
				</div>
			</div>
			<h4>Animation</h4>
			<h3>Spil + dokumentation</h3>
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
		align-items: center;
		width: 1420px;
		gap: 60px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}
	.container {
		position: relative;
	}

	/* .container:hover img {
		filter: blur(2px);
	} */

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
		background-color: rgba(90, 89, 89, 0.578);
	}

	.container:hover .overlay {
		opacity: 0;
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

	.til-toppen {
		display: grid;
		place-items: center;
		text-align: center;
		text-transform: uppercase;
		font-size: 1.5rem;
		padding-bottom: 3rem;
	}
	.spacer {
		padding: 2rem;
		width: 100%;
		display: grid;
		place-items: center;
	}

	/* section {
		padding-block: 3rem;
	}

	.text-box {
		padding: 2rem;
		height: auto;
		background: rgba(37, 36, 47, 0.605);
		box-shadow: 4px 4px 2px;
	}

	.text-box:hover {
		background: rgba(58, 57, 66, 0.605);
	}

	span {
		padding-left: 1rem;
		font-weight: 900;
	}

	@media (min-width: 600px) {
		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			place-items: center;
			width: 100%;
		}
		.spacer {
			padding: 4rem;
			width: 100%;
			display: grid;
			place-items: center;
		}

		#box-1 {
			border-top: solid 2px white;
			border-image: linear-gradient(
					90deg,
					rgba(2, 80, 255, 0.4) 0%,
					rgba(111, 216, 221, 0.4) 27%,
					rgba(176, 174, 22, 0.4) 49%,
					rgba(204, 87, 14, 0.4) 67%,
					rgba(255, 0, 0, 0.4) 100%
				)
				1;

			border-right: solid 2px white;
			border-image: linear-gradient(
					90deg,
					rgba(2, 80, 255, 0.4) 0%,
					rgba(111, 216, 221, 0.4) 27%,
					rgba(176, 174, 22, 0.4) 49%,
					rgba(204, 87, 14, 0.4) 67%,
					rgba(255, 0, 0, 0.4) 100%
				)
				1;
		}
		#box-2 {
			border-bottom: solid 2px white;
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
	} */
</style>
