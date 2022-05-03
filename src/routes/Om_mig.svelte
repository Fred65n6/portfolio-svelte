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
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

<Header />

<div class="heading">
	<h1>ABOUT ME</h1>
</div>

<div class="container">
	<div class="pictures">
		<img src="om-mig.webp" alt="portæt" />
	</div>
</div>
<section id="om-mig">
	<article>
		<h1>Frederik Milland</h1>
		<div class="text">
			<p>
				My name is Frederik, I'm 27 years old, born and raised in Copenhagen and I love to make
				designs and set up websites. Now If you want to get a bit more familiar, I can tell you that
				it hasn't always been on the cards that i should choose to study multimedia design.
				<br /><br />
				Ever since i was a boy, I've had a big passion for music, and I've been writing music and playing
				in different bands since i was 12 years old. But when you're a performing musician who wants
				to release your music to the world, you usually need some kind of artwork to supplement your
				music, and cool artworks arent all that easy to make yourself, nor is it that cheap to get somebody
				else to make for you.
			</p>
			<p>
				But then it's lucky that I've always had a <span class="font-semibold"
					>"Can do attitude".</span
				>
				So i started to artworks to some of our earliest releases. Don't get me wrong, some of the first
				ones i made were terrible. But I learned by doing, and suddenly people started to actually like
				the designs I made, and for the first time ever, I knew what I wanted to do, if I werent meant
				to be a musician.
				<br /><br />
				Since i started studying at KEA, I've fallen in love with coding and setting up websites. Because
				just like with writing music, I love to build things from scratch, and I love a chance to do
				my best and get better at something.
			</p>
		</div>
	</article>
</section>

<div class="box">
	<div class="kompetencer">
		<h2>SKILLS</h2>
		<ol>
			<li>- Experienced with Photoshop, Illustrator, Premiere Pro, InDesign og Figma</li>
			<br />
			<li>
				- Experience in coding in html, css og javascript, as well as frameworks like Svelte and
				Tailwind
			</li>
			<br />
			<li>- Experience in setting up websites in CMS's like Wordpress</li>
		</ol>
	</div>
</div>

<section>
	<div class="kontakt">
		<h2>Contact</h2>
		<address>
			<div class="">
				<p>E-mail:</p>
				<a href="mailto:frederik-milland@hotmail.com">frederik-milland@hotmail.com</a>
			</div>
			<div class="">
				<p>Telephone:</p>
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
	<a href="#top"> ︽<br /> To the top</a>
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
	.box {
		max-width: 95%;
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
		width: 100%;
		display: grid;
		gap: 10px;
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
		margin-top: 1rem;
		gap: 4rem;
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
