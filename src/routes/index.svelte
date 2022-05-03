<script context="module">
	export const prerender = true;
	import Hero from './Hero.svelte';
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<Hero />
<Header />

<section id="forside">
	<div id="box-1" class="spacer ">
		<a sveltekit:prefetch href="/Portfolio">
			<div class="text-box ">
				<h2>Portfolio</h2>
				<p>
					See some of the projects I've worked on during my time at KEA
					<span>➝</span>
				</p>
			</div>
		</a>
	</div>

	<div id="box-2" class="spacer ">
		<a sveltekit:prefetch href="/Om_mig">
			<div class="text-box ">
				<h2>ABOUT ME</h2>
				<p>
					Read a little about why i chose to become a multimedia designer<span>➝</span>
				</p>
			</div>
		</a>
	</div>
</section>

<style>
	.spacer {
		padding: 2rem;
		display: grid;
		place-items: center;
	}

	#forside a:hover {
		color: black;
	}

	@media (max-width: 650px) {
		section {
			padding-block: 4rem;
			width: 100%;
			display: grid;
		}
	}

	.text-box {
		padding: 1rem;
		height: auto;
		background: rgba(218, 217, 217, 0.605);
		box-shadow: 2px 2px 4px;
		height: 13rem;
	}

	.text-box:hover {
		background: linear-gradient(to right, rgba(196, 196, 196, 0.7), rgba(255, 255, 255, 0.7)),
			url(https://grainy-gradients.vercel.app/noise.svg);
		transform: scale(1.02);
		z-index: 2;
		position: static;
		transition: 0.5s linear;
	}

	a:hover {
		text-decoration: none;
	}
	@media (min-width: 650px) {
		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			place-items: center;
			width: 100%;
			padding-block: 12rem;
		}

		.text-box:hover {
			background: linear-gradient(to right, rgba(196, 196, 196, 0.7), rgba(255, 255, 255, 0.7)),
				url(https://grainy-gradients.vercel.app/noise.svg);
			transform: scale(1.02);
			z-index: 2;
			position: static;
			transition: 0.5s linear;
		}

		.spacer {
			padding: 4rem;
			width: 100%;
			display: grid;
			place-items: center;
		}
		.text-box {
			padding: 2rem;
		}

		#box-1 {
			border-top: solid 4px white;
			border-image: linear-gradient(
					90deg,
					rgb(152, 6, 6) 0%,
					rgb(179, 84, 26) 27%,
					rgb(169, 159, 21) 49%,
					rgb(65, 141, 187) 67%,
					rgb(7, 53, 162) 100%
				)
				1;

			border-right: solid 4px white;
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
		#box-2 {
			border-bottom: solid 4px white;
			border-image: linear-gradient(
					90deg,
					rgb(7, 53, 162) 0%,
					rgb(65, 141, 187) 27%,
					rgb(169, 159, 21) 49%,
					rgb(179, 84, 26) 67%,
					rgb(152, 6, 6) 100%
				)
				1;
		}
	}

	@media (max-width: 450px) {
		h2 {
			font-size: 2rem;
		}
	}
</style>
