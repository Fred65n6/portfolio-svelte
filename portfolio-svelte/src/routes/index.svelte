<script context="module">
	export const prerender = true;
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import Burgermenu from './Burgermenu.svelte';
</script>

<svelte:head>
	<title>FM Design</title>
</svelte:head>

<Hero />

<Burgermenu />

<section id="forside">
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

	<div id="box-2" class="spacer ">
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
</section>

<Footer />

<style>
	.spacer {
		padding: 2rem;
		width: 100%;
		display: grid;
		place-items: center;
	}

	section {
		padding-block: 6rem;
	}

	@media (min-width: 650px) {
		section {
			padding-block: 12rem;
		}
	}

	.text-box {
		padding: 2rem;
		height: auto;
		background: rgba(218, 217, 217, 0.605);
		box-shadow: 2px 2px 4px;
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
		color: black;
	}

	@media (min-width: 650px) {
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
