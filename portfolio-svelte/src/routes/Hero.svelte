<script>
</script>

<div class="hero bg-pan-left bg-hero2">
	<div class="hero-border grid place-items-center p-28 md:border-none ">
		<div class="w-auto h-auto pt-8 ">
			<img class="fade-in " src="./Frederik Milland.svg" alt="logo" />
			<h1 class="tracking-in-expand-fwd ">WEBDESIGNER</h1>
		</div>
		<div class="grid place-items-center relative top-20">
			<a class="pulsate-fwd" href="#forside">︾</a>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 4rem;
		letter-spacing: 1.1rem;
		text-decoration: none;
	}

	a {
		color: white;
		font-size: 3.5rem;
		scroll-behavior: smooth;
	}

	img {
		padding: 2rem;
	}

	.hero {
		max-width: 1420px;
		background-size: cover;
		overflow: hidden;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 650px) {
		.hero {
			padding-block: 15rem;
		}

		h1 {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 650px) {
		.hero-border {
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
		}
	}
</style>
