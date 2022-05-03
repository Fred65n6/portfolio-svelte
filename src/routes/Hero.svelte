<script>
</script>

<div class="hero md:bg-pan-left">
	<div class="container">
		<img class="fade-in " src="./frederik_milland.svg" alt="logo" />
		<h1 class="tracking-in-expand-fwd ">WEBDESIGNER</h1>
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

	.container {
		display: grid;
		place-items: center;
	}

	a {
		position: static;
		padding-top: 4rem;
		font-size: 3.5rem;
		scroll-behavior: smooth;
		color: white;
	}

	a:hover {
		text-decoration: none;
	}

	.hero {
		background-image: url('../../static/background.img_portfolio.webp');
		display: grid;
		place-items: center;
		background-size: cover;
		position: static;
		z-index: 4;
		overflow: hidden;
		height: 100vh;
		width: 100%;
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

	@media (min-width: 650px) {
		.hero {
			width: 100vw;
		}
	}

	@media (max-width: 650px) {
		h1 {
			font-size: 0.6rem;
		}

		.hero {
			background-size: fill;
			background-repeat: no-repeat;
		}
		.hero {
			padding-inline: 2rem;
		}
	}
</style>
