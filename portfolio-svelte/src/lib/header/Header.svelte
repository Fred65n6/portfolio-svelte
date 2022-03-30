<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/">
			<img class="hover:pulsate-fwd" src="./FM.svg" alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Forside</a>
			</li>
			<li class:active={$page.url.pathname === '/Portfolio'}>
				<a sveltekit:prefetch href="/Portfolio">Portfolio</a>
			</li>
			<li class:active={$page.url.pathname === '/Om_mig'}>
				<a sveltekit:prefetch href="/Om_mig">om mig</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	@media (min-width: 650px) {
		header {
			border-bottom: solid 2px black;

			position: fixed;
			z-index: 3;
			margin: 0 auto;
			gap: 30px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px;
			right: 0;
			width: 100%;

			background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
				url(https://grainy-gradients.vercel.app/noise.svg);
		}
		.corner img {
			filter: invert(1);
			width: 4rem;
			height: auto;
			padding: 5px;
			object-fit: contain;
		}

		nav {
			display: flex;
			justify-content: center;
		}

		ul {
			gap: 30px;
			position: relative;
			padding: 0;
			margin: 0;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			background: var(--background);
			background-size: contain;
		}

		li {
			position: relative;
			height: 100%;
		}

		nav a {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 1em;
			color: var(--heading-color);
			font-weight: 400;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;
		}

		img:hover {
			color: rgb(6, 128, 172);
			text-decoration: underline;
		}
		a:hover {
			color: rgb(6, 128, 172);
			text-decoration: underline;
		}
	}

	@media (max-width: 650px) {
		header {
			display: none;
		}
	}
</style>
