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
	}
</style>
