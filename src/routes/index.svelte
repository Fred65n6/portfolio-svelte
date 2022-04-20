<script context="module">
	export const prerender = true;
	import Hero from './Hero.svelte';
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<title>FM Design</title>
</svelte:head>

<Hero />
<Header />

<section id="forside">
	<div id="box-1" class="spacer ">
		<a sveltekit:prefetch href="/Portfolio">
			<div class="text-box ">
				<h2>Portfolio</h2>
				<p>
					Se nogle af de forskellige projekter som jeg har arbejdet på i den tid jeg har været
					studerende på KEA<span>➝</span>
				</p>
			</div>
		</a>
	</div>

	<div id="box-2" class="spacer ">
		<a sveltekit:prefetch href="/Om_mig">
			<div class="text-box ">
				<h2>Om mig</h2>
				<p>
					Lær mig lidt bedre at kende og læs om hvilke kompetencer jeg besidder<span>➝</span>
				</p>
			</div>
		</a>
	</div>
</section>

<style>
	.spacer {
		padding: 2rem;
		width: 100%;
		display: grid;
		place-items: center;
	}

	@media (max-width: 650px) {
		section {
			padding-block: 6rem;
			position: relative;
			width: 100%;
			display: grid;
			gap: 10px;
		}
	}

	.text-box {
		padding: 2rem;
		height: auto;
		background: rgba(218, 217, 217, 0.605);
		box-shadow: 2px 2px 4px;
		height: 16rem;
	}

	.text-box:hover {
		background: linear-gradient(to right, rgba(196, 196, 196, 0.7), rgba(255, 255, 255, 0.7)),
			url(https://grainy-gradients.vercel.app/noise.svg);
		transform: scale(1.02);
		z-index: 2;
		position: static;
		transition: 0.5s linear;
	}

	span {
		padding-left: 1rem;
		font-weight: 900;
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

		.spacer {
			padding: 4rem;
			width: 100%;
			display: grid;
			place-items: center;
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
</style>
