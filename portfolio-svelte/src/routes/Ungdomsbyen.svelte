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

<div class="heading">
	<h2>Ungdomsbyen</h2>
</div>

<div class="card ">
	<div class="container">
		<img src="ungdomsbyen.webp" alt="Ungdomsbyen" />
		<div class="overlay">
			<div class="text">
				<a href="https://skuret.eu/kea/ungdomsbyen" target="blank">SE SIDEN ➝</a>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<section>
		<h3>Opgaven</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p>
	</section>

	<section>
		<h3>Udfordringer og proces</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos ut earum eligendi
			voluptas. Atque distinctio libero error, rem nemo, fugit voluptas explicabo sequi sunt odit,
			architecto eos quibusdam nostrum.
		</p>
	</section>

	<section>
		<h3>Løsning</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, natus? Aspernatur illum illo
			atque quia, temporibus aliquam magnam expedita dignissimos obcaecati adipisci voluptatum
			eaque, voluptate sapiente necessitatibus cumque ipsa aperiam voluptas harum omnis. Earum velit
			doloribus suscipit eaque ullam, odio tenetur, quod consequatur vero repellendus veniam
			molestias iusto, recusandae qui.
		</p>
	</section>

	<section>
		<div class="my-8 flex justify-between">
			<a sveltekit:prefetch href="/Portfolio">🠔 GÅ TILBAGE</a>
			<a href="https://skuret.eu/kea/ungdomsbyen" target="blank">SE SIDEN ➝</a>
		</div>
	</section>
</div>

<style>
	.container {
		position: relative;
		width: 100%;
		display: grid;
		gap: 10px;
	}

	img {
		box-shadow: 2px 2px 4px;
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

	.card:hover {
		transform: scale(1.02);
		z-index: 2;
		position: static;
		transition: 0.5s linear;
	}

	.card:hover img {
		filter: blur(3px);
	}

	.card:hover .overlay {
		opacity: 1;
	}
	section {
		display: grid;
	}

	img {
		width: 60rem;
	}

	.container {
		display: grid;

		max-width: 980px;
	}
</style>
