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
	<title>Portfolio</title>
</svelte:head>

<Header />

<div class="heading" id="top">
	<h1>PORTFOLIO</h1>
</div>

<!-- <section>
	<p>
		Her kan du se et overblik over de forskellige projekter jeg har arbejdet på i min tid på KEA.
		Klik ind på siderne og se nærmere om selve opgaven, processen og den færdige løsning<span
			>*</span
		>
	</p>
</section> -->

<section id="portfolio">
	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Musikloftet">
			<div class="card ">
				<div class="container">
					<img src="musikloftet.webp" alt="Musikloftet" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>MUSIKLOFTET ➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Musikloftet"><h4>WEBSITE: MUSIKLOFTET ➝</h4></a>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Toast">
			<div class="card ">
				<div class="container">
					<img src="toast.webp" alt="Musikloftet" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>TOAST no.9 ➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Toast"><h4>WEBSITE: TOAST no.9 ➝</h4></a>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Artworks">
			<div class="card ">
				<div class="container">
					<img src="artworks.webp" alt="Artworks" />
					<div class="overlay">
						<div class="text">
							<h4>DESIGN:</h4>
							<h3>ARTWORKS➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Artworks"><h4>DESIGN: ARTWORKS➝</h4></a>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Teater">
			<div class="card">
				<div class="container">
					<img src="grob.webp" alt="Teater grob" />
					<div class="overlay">
						<div class="text">
							<h4>KAMPAGNESITE:</h4>
							<h3>TEATER GROB➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Teater"><h4>KAMPAGENSITE: TEATER GROB ➝</h4></a>
	</div>
	<!-- 
	<div class="">
		<a class="" sveltekit:prefetch href="/Ungdomsbyen">
			<div class="card ">
				<div class="container">
					<img src="ungdomsbyen.webp" alt="Ungdomsbyen" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>UNGDOMSBYEN ➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Ungdomsbyen"><h4>WEBSITE: UNGDOMSBYEN ➝</h4></a>
	</div> -->

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Olklubben">
			<div class="card ">
				<div class="container">
					<img src="olklubben.webp" alt="Ølklubben" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>ØLKLUBBEN➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Olklubben"><h4>WEBSITE: ØLKLUBBEN ➝</h4></a>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Spil">
			<div class="card ">
				<div class="container">
					<img src="spil.webp" alt="Spil" />
					<div class="overlay">
						<div class="text">
							<h4>ANIMATION:</h4>
							<h3>IMPRESS A GIRL➝</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Spil"><h4>ANIMATION: IMPRESS A GIRL ➝</h4></a>
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

	.mobile-link {
		padding-bottom: 2rem;
		text-align: right;
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
			pointer-events: none;
		}
	}

	@media (min-width: 650px) {
		#portfolio {
			display: grid;
			align-items: center;
			width: 1300px;
			gap: 15px;
			grid-template-columns: 1fr 1fr 1fr;
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
