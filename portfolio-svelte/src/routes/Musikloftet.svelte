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
	<h2>Musikloftet</h2>
</div>

<section><img src="musikloftet.webp" alt="" /></section>

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
		<div class="my-8 grid place-items-center">
			<a href="*">SE SIDEN HER ➝</a>
		</div>
	</section>
</div>

<style>
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
