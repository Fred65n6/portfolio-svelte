<script context="module">
	export const prerender = true;
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>FM Design</title>
</svelte:head>

<Hero />

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
		background: rgba(177, 177, 177, 0.605);
	}

	span {
		padding-left: 1rem;
		font-weight: 900;
	}
	a:hover {
		color: black;
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
			border-top: solid 4px white;
			border-image: linear-gradient(
					90deg,
					rgba(255, 0, 0, 0.5) 0%,
					rgba(204, 87, 14, 0.5) 27%,
					rgba(176, 174, 22, 0.5) 49%,
					rgba(111, 216, 221, 0.5) 67%,
					rgba(2, 80, 255, 0.5) 100%
				)
				1;

			border-right: solid 4px white;
			border-image: linear-gradient(
					90deg,
					rgb(140, 11, 11) 0%,
					rgba(117, 50, 9, 1) 27%,
					rgb(111, 110, 15) 49%,
					rgb(56, 126, 130) 67%,
					rgb(5, 50, 155) 100%
				)
				1;
		}
		#box-2 {
			border-bottom: solid 4px white;
			border-image: linear-gradient(
					90deg,
					rgb(5, 50, 155) 0%,
					rgb(56, 126, 130) 27%,
					rgb(111, 110, 15) 49%,
					rgba(117, 50, 9, 1) 67%,
					rgb(140, 11, 11) 100%
				)
				1;
		}
	}
</style>
