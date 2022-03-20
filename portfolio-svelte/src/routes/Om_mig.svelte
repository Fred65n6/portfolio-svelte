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

<div class="container">
	<div class="pictures">
		<img src="./om-mig.webp" alt="portæt" />
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

	<div class="box">
		<div class="kompetencer">
			<h2>Kontakt</h2>
			<ol>
				<li>Telefon: +45 22 90 12 44</li>
				<li>E-mail: Frederik-milland@hotmail.com</li>
			</ol>
		</div>
		<div class="cv">
			<h2>CV</h2>
			<ol>
				<li>- lorem ipsum</li>
				<li>- lorem ipsum</li>
				<li>- lorem ipsum</li>
			</ol>
		</div>
	</div>
</section>
<div class="til-toppen hover:pulsate-fwd">
	<a href="#top"> ︽<br /> Til toppen</a>
</div>
<Footer />

<style>
	#om-mig {
		margin-inline: 1rem;
		padding-block: 3rem;
	}

	@media (min-width: 650px) {
		.text {
			grid-template-columns: 1fr 1fr;
		}
	}
	.box {
		padding-block: 6rem;
		text-align: center;
		box-shadow: 2px 2px 4px;
		background: rgba(218, 217, 217, 0.605);
		padding: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.container {
		margin-top: 3rem;
		border-block: solid 6px;
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
</style>
