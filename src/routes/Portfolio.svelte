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
		<a class="desk-link" sveltekit:prefetch href="/nb">
			<div class="card ">
				<div class="container">
					<img src="nb.svg" alt="nørrebro bryhus logo" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>
								NB BRYGHUS <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/nb"
			><h4>
				WEBSITE: NB BRYGHUS <svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Vildskud">
			<div class="card ">
				<div class="container">
					<img src="hero_bg_2.svg" alt="Spil" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>
								VILDSKUD <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Vildskud"
			><h4>
				WEBSITE: VILDSKUD <svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Musikloftet">
			<div class="card ">
				<div class="container">
					<img src="musikloftet.svg" alt="Musikloftet logo" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>
								MUSIKLOFTET <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Musikloftet"
			><h4>
				WEBSITE: MUSIKLOFTET <svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Toast">
			<div class="card ">
				<div class="container">
					<img src="toast.webp" alt="Toast no.9 logo" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>
								TOAST no.9 <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Toast"
			><h4>
				WEBSITE: TOAST no.9 <svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Artworks">
			<div class="card ">
				<div class="container">
					<img src="artworks.webp" alt="Artworks" />
					<div class="overlay">
						<div class="text">
							<h4>DESIGN:</h4>
							<h3>
								ARTWORKS <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Artworks"
			><h4>
				DESIGN: ARTWORKS<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
	</div>

	<div class="">
		<a class="desk-link" sveltekit:prefetch href="/Teater">
			<div class="card">
				<div class="container">
					<img src="grob.webp" alt="Teater grob logo" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>
								TEATER GROB <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Teater"
			><h4>
				WEBSITE: TEATER GROB <svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
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
					<img src="olklubben.webp" alt="Ølklubben logo" />
					<div class="overlay">
						<div class="text">
							<h4>WEBSITE:</h4>
							<h3>
								ØLKLUBBEN <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class="iconify iconify--ion"
									width="28"
									height="36"
									preserveAspectRatio="xMidYMid meet"
									viewBox="0 0 512 512"
									><path
										d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z"
										fill="black"
									/></svg
								>
							</h3>
						</div>
					</div>
				</div>
			</div></a
		>
	</div>
	<div class="mobile-link">
		<a sveltekit:prefetch href="/Olklubben"
			><h4>
				WEBSITE: ØLKLUBBEN <svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--ion"
					width="28"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 512 512"
					><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="black" /></svg
				>
			</h4></a
		>
	</div>
</section>

<section>
	<div class="disclaimer">
		<p>
			<span>* </span>
			These websites aren't finished products, but school projects with certain focusses or problems
			we had to solve. <br /> That means that some of the sites have links that don't work, or paths
			that lead nowhere .
		</p>
	</div>
	<div class="til-toppen hover:pulsate-fwd">
		<a href="#top"> ︽<br /> To the top</a>
	</div>
</section>

<style>
	section {
		gap: 30px;
	}
	img {
		box-shadow: 2px 2px 4px;
	}

	#portfolio a:hover {
		color: black;
	}

	h3 {
		display: flex;
		font-weight: 400;
	}
	h4 {
		display: flex;
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
		text-align: center;
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
		left: 40%;
		top: 50%;
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
