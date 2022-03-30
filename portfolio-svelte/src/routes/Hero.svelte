<script>
</script>

<div class="hero bg-pan-left bg-hero2">
	<div class="hero-border grid place-items-center md:border-none ">
		<img class="fade-in " src="./frederik_milland.svg" alt="logo" />
		<h1 class="tracking-in-expand-fwd">WEBDESIGNER</h1>
		<a class="pulsate-fwd" href="#forside">︾</a>
	</div>
</div>

<style>
	h1 {
		font-size: 5.5rem;
		letter-spacing: 1rem;
		padding-bottom: 3px;
		text-decoration: none;
		color: WHITE;
	}

	a {
		position: relative;
		top: 6rem;
		font-size: 3.5rem;
		scroll-margin-top: 50px;
		scroll-behavior: smooth;
		color: white;
	}

	a:hover {
		text-decoration: none;
	}

	.hero {
		place-self: center;
		background-size: cover;
		position: static;
		z-index: 5;
		overflow: hidden;
		width: 100%;
		height: 100vh;
		padding-top: 14rem;
		padding-bottom: 11.9rem;
		border-block: solid 6px;
		border-image: linear-gradient(
				90deg,
				rgb(152, 6, 6, 0.7) 0%,
				rgb(179, 84, 26, 0.7) 27%,
				rgb(169, 159, 21, 0.7) 49%,
				rgb(65, 141, 187, 0.7) 67%,
				rgb(7, 53, 162, 0.7) 100%
			)
			1;
	}

	@media (max-width: 650px) {
		.hero {
			padding-block: 15rem;
			padding-inline: 2rem;
		}

		h1 {
			font-size: 1.5rem;
		}
	}
</style>
