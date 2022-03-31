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

<svelte:head>
	<title>Om mig</title>
</svelte:head>

<div class="heading">
	<h1>OM MIG</h1>
</div>

<div class="container">
	<div class="pictures">
		<img src="om-mig.webp" alt="portæt" />
	</div>
</div>
<section id="om-mig">
	<article>
		<h2>Frederik Milland</h2>
		<div class="text">
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores porro rerum
				temporibus possimus. Nostrum ex odio cupiditate quia, corrupti ea nobis voluptatum ipsa
				voluptatibus dolore dolorem reprehenderit architecto nisi consectetur, fugit laborum modi.
				Nemo impedit tempore mollitia, et voluptatum aperiam sed aliquid. Ipsam, tempora optio
				veniam facere perferendis nihil, alias iste illo esse sint rerum quis accusamus dolores
				recusandae officia quos cupiditate ratione laborum, consequuntur nobis vel pariatur modi
				autem! Earum magni quaerat facere.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi officiis nulla qui atque
				aliquam quo nesciunt, quae ex mollitia. Sint atque quae fugit totam reprehenderit numquam
				veniam sapiente. Mollitia, distinctio? Consequuntur officia exercitationem vero esse, eius
				veniam earum temporibus laborum possimus quisquam dolore reprehenderit. Quia, odit dolor.
				Pariatur, necessitatibus! Unde minima, assumenda vero natus optio quaerat fugiat molestias
				cumque mollitia tempora amet placeat nihil aut id ducimus sed, rem nesciunt, deserunt
				laborum expedita porro.
			</p>
		</div>
	</article>
</section>

<div class="box">
	<div class="kompetencer">
		<h2>Kompetencer</h2>
		<ol>
			<li>- Erfaring med Photoshop, Illustrator, Premiere Pro, InDesign og Figma</li>
			<br />
			<li>
				- Erfaring med at kode basic html, css og javascript, samt frameworks som Svelte og Tailwind
			</li>
			<br />
			<li>- Erfaring med opsætning af hjemmesider i diverse CMS som wordpress og shopify</li>
		</ol>
	</div>
</div>

<section>
	<div class="kontakt">
		<h2>Kontakt</h2>
		<address>
			<div class="">
				<p>E-mail:</p>
				<a href="mailto:frederik-milland@hotmail.com">frederik-milland@hotmail.com</a>
			</div>
			<div class="">
				<p>Telefon:</p>
				<a href="tel:+4522901244">+4522901244</a>
			</div>
			<div class="">
				<p>LinkedIn</p>
				<a href="https://www.linkedin.com/in/frederik-milland-a2b671205/">https://bit.ly/3qOJCFY</a>
			</div>
		</address>
	</div>
</section>

<div class="til-toppen hover:pulsate-fwd">
	<a href="#top"> ︽<br /> Til toppen</a>
</div>

<style>
	section {
		gap: 30px;
		display: grid;
		margin-inline: 1rem;
		padding-block: 1rem;
	}
	address {
		font-style: normal;
		display: grid;
		gap: 20px;
		text-align: center;
		margin-top: 2rem;
	}

	.kontakt {
		display: grid;
		place-items: center;
		margin-top: 2rem;
	}

	address p {
		font-weight: 400;
	}

	@media (min-width: 650px) {
		address {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.text {
			grid-template-columns: 1fr 1fr;
		}

		.box {
			grid-template-columns: 1fr;
		}
	}
	.box {
		padding-block: 6rem;
		text-align: center;
		box-shadow: 2px 2px 4px;
		background: rgba(218, 217, 217, 0.605);
		padding: 4rem;
		display: grid;
	}

	.container {
		margin-top: 3rem;
		border-block: solid 6px;
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
	.pictures {
		object-fit: cover;
		display: flex;
	}
	article {
		margin-block: 3rem;
		max-width: 900px;
		display: grid;
		place-items: center;
	}
	.text {
		gap: 1rem;
		display: grid;
	}

	li {
		font-weight: 100;
		font-size: 1.1rem;
	}

	address {
		font-size: 1.1rem;
	}
</style>
