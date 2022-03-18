<script>
</script>

<div class="hero bg-pan-left bg-hero2">
	<div class="hero-border grid place-items-center md:p-48 p-8 md:border-none ">
		<div class="w-auto h-auto pt-8 ">
			<img class="fade-in " src="./Frederik Milland.svg" alt="logo" />
			<h1 class="tracking-in-expand-fwd ">WEBDESIGNER</h1>
		</div>
		<div class="grid place-items-center relative top-24">
			<a class="pulsate-fwd" href="#forside">︾</a>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 6;
		letter-spacing: 1rem;
		padding-bottom: 3px;
		text-decoration: none;
	}

	a {
		font-size: 3.5rem;
		scroll-margin-top: 50px;
		scroll-behavior: smooth;
	}

	.hero {
		background-size: cover;
		overflow: hidden;
		width: 100%;
		height: 100%;
		padding-top: 4rem;
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
