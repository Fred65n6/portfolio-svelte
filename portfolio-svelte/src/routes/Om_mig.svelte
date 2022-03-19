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

<div class="heading">
	<h1>OM MIG</h1>
</div>
<section id="om-mig">
	<div class="container-1 grid place-items-center p-8 md:border-b-4 md:border-r-4 w-full">
		<div class="text-box">
			<h2>Frederik Milland</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id rerum est eaque sapiente nisi
				non quam atque ex. Veniam facere dolore vel ex sit quasi blanditiis aut autem, temporibus
				itaque voluptas et eius pariatur. Molestiae beatae autem optio distinctio, a eum sunt
				voluptate, quam doloremque enim at iste corporis praesentium similique deleniti minus
				consectetur delectus vero doloribus quidem animi. Excepturi provident obcaecati odio, quod
				illum tenetur repellat facilis aspernatur veniam.
			</p>
		</div>
	</div>
	<div class="container-2 p-8 md:border-t-4 w-full  grid place-items-center">
		<div class="text-box-2 ">
			<img src="portræt.webp" alt="" />
		</div>
	</div>
</section>

<Footer />

<style>
	#om-mig {
		display: grid;
		grid-template-columns: 1fr 1fr;
		place-items: center;
		width: 100%;
		padding-block: 3rem;
	}

	@media (min-width: 650px) {
		.container-1 {
			display: grid;
			place-items: center;
			padding: 2rem;
			border-bottom: solid 2px;
			border-image: linear-gradient(
					90deg,
					rgba(255, 0, 0, 0.4) 0%,
					rgba(204, 87, 14, 0.4) 27%,
					rgba(176, 174, 22, 0.4) 49%,
					rgba(111, 216, 221, 0.4) 67%,
					rgba(2, 80, 255, 0.4) 100%
				)
				1;
			border-right: solid 2px;
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

		.container-2 {
			display: grid;
			place-items: center;
			padding: 2rem;
			border-top: solid 2px;
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
	}

	img {
		height: 32rem;
		box-shadow: 4px 4px 2px;
	}

	.text-box {
		box-shadow: 4px 4px 2px;
		background: rgba(37, 36, 47, 0.605);
		width: 24rem;
		height: 32rem;
		padding: 1.5rem;
	}

	.text-box-2 {
		width: 24rem;
		height: 32rem;
	}
</style>
