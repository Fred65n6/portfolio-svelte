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
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="heading" id="top">
	<h1>PORTFOLIO</h1>
</div>

<section>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quis beatae culpa amet, odio
		porro veniam veritatis autem aliquid.. <span>*</span>
	</p>
</section>

<section id="portfolio">
	<div class="">
		<div class="card ">
			<div class="container">
				<img src="musikloftet.webp" alt="Musikloftet" />
				<div class="overlay">
					<div class="text">
						<h4>WEBSITE:</h4>
						<h2>MUSIKLOFTET</h2>
						<a class="desk-link" sveltekit:prefetch href="/Musikloftet"
							>Læs om procesen og se siden ➝</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>WEBSITE: MUSIKLOFTET</h4>
			<a sveltekit:prefetch href="/Musikloftet">Læs om procesen og se siden ➝</a>
		</div>
	</div>
	<div class="">
		<div class="card ">
			<div class="container">
				<img src="toast.webp" alt="Musikloftet" />
				<div class="overlay">
					<div class="text">
						<h4>WEBSITE:</h4>
						<h2>TOAST no.9</h2>
						<a class="desk-link" sveltekit:prefetch href="/Toast">Læs om procesen og se siden ➝</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>WEBSITE: TOAST no.9</h4>
			<a sveltekit:prefetch href="/Toast">Læs om procesen og se siden ➝</a>
		</div>
	</div>

	<div class="">
		<div class="card ">
			<div class="container">
				<img src="artworks.webp" alt="Artworks" />
				<div class="overlay">
					<div class="text">
						<h4>DESIGN:</h4>
						<h2>ARTWORKS</h2>
						<a class="desk-link" sveltekit:prefetch href="/Artworks"
							>Læs om procesen og se siden ➝</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>DESIGN: ARTWORKS</h4>
			<a sveltekit:prefetch href="/Artworks">Læs om procesen og se siden ➝</a>
		</div>
	</div>

	<div class="">
		<div class="card ">
			<div class="container">
				<img src="grob.webp" alt="Teater grob" />
				<div class="overlay">
					<div class="text">
						<h4>KAMPAGNE SITE:</h4>
						<h2>TEATER GROB</h2>
						<a class="desk-link" sveltekit:prefetch href="/Teater">Læs om procesen og se siden ➝</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>KAMPAGNE SITE: TEATER GROB</h4>
			<a sveltekit:prefetch href="/Teater">Læs om procesen og se siden ➝</a>
		</div>
	</div>

	<div class="">
		<div class="card">
			<div class="container">
				<img src="ungdomsbyen.webp" alt="Ungdomsbyen" />
				<div class="overlay">
					<div class="text">
						<h4>WEBSITE:</h4>
						<h2>UNGDOMSBYEN</h2>
						<a class="desk-link" sveltekit:prefetch href="/Ungdomsbyen"
							>Læs om procesen og se siden ➝</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>WEBSITE: UNGDOMSBYEN</h4>
			<a sveltekit:prefetch href="/Ungdomsbyen">Læs om procesen og se siden ➝</a>
		</div>
	</div>

	<div class="">
		<div class="card ">
			<div class="container">
				<img src="olklubben.webp" alt="Ølklubben" />
				<div class="overlay">
					<div class="text">
						<h4>WEBSITE:</h4>
						<h2>ØLKLUBBEN</h2>
						<a class="desk-link" sveltekit:prefetch href="/Olklubben"
							>Læs om procesen og se siden ➝</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>WEBSITE: ØLKLUBBEN</h4>
			<a sveltekit:prefetch href="/Olklubben">Læs om procesen og se siden ➝</a>
		</div>
	</div>

	<div class="">
		<div class="card ">
			<div class="container">
				<img src="spil.webp" alt="Spil" />
				<div class="overlay">
					<div class="text">
						<h4>ANIMATION</h4>
						<h2>SPIL</h2>
						<a class="desk-link" sveltekit:prefetch href="/Spil">Læs om procesen og se siden ➝</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile-link">
			<h4>ANIMATION: SPIL</h4>
			<a sveltekit:prefetch href="/Spil">Læs om procesen og se siden ➝</a>
		</div>
	</div>
</section>

<section>
	<div class="disclaimer">
		<p>
			<span>* </span> Siderne er ikke færdige produkter, men opgaver der har haft et bestemt fokuspunkt,
			eller en problemstilling der skulle løses. Derfor vil der være ufuldtendte stier og forskellige
			mangler ved siderne.
		</p>
	</div>
	<div class="til-toppen hover:pulsate-fwd">
		<a href="#top"> ︽<br /> Til toppen</a>
	</div>
</section>

<style>
	section {
		gap: 30px;
	}
	img {
		box-shadow: 2px 2px 4px;
	}

	.mobile-link {
		padding-top: 1rem;
	}

	span {
		color: red;
		font-weight: 500;
	}
	.card {
		display: flex;
	}

	.container {
		position: relative;
		width: 100%;
		display: grid;
		gap: 10px;
	}

	.overlay {
		display: grid;
		place-items: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: 0.5s ease;
		background: linear-gradient(to right, rgba(233, 231, 231, 0.8), rgba(255, 255, 255, 0.9)),
			url(https://grainy-gradients.vercel.app/noise.svg);
	}
	.text {
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		justify-items: center;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		transition: 0.4s linear;
	}

	.disclaimer {
		font-style: italic;
	}

	@media (max-width: 650px) {
		.overlay {
			display: none;
		}
		.text {
			display: none;
		}

		.desk-link {
			display: none;
		}
	}

	@media (min-width: 650px) {
		#portfolio {
			display: grid;
			align-items: center;
			width: 1300px;
			gap: 15px;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
		}

		.card:hover {
			transform: scale(1.02);
			z-index: 2;
			position: static;
			transition: 0.5s linear;
		}

		.card:hover img {
			filter: blur(3px);
		}

		.container:hover .overlay {
			opacity: 1;
		}

		.mobile-link {
			display: none;
		}
	}
</style>
