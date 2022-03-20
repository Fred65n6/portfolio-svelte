<script>
</script>

<div class="hero bg-pan-left bg-hero2">
	<div class="hero-border grid place-items-center md:border-none ">
		<img class="fade-in " src="./Frederik Milland.svg" alt="logo" />
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
		color: rgb(0, 115, 157);
		transition: color 0.4s linear;
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
				rgba(255, 0, 0, 0.5) 0%,
				rgba(204, 87, 14, 0.5) 27%,
				rgba(176, 174, 22, 0.5) 49%,
				rgba(111, 216, 221, 0.5) 67%,
				rgba(2, 80, 255, 0.5) 100%
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
