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
	header {
		display: flex;
		justify-content: space-between;
		padding-inline: 2.5rem;
		padding-block: 1rem;
		width: 100%;
		background-color: #f0f8ff;
		position: sticky;
	}

	.corner img {
		width: 4rem;
		height: auto;
		padding: 5px;
		object-fit: contain;
		filter: invert(1);
	}

	nav {
		display: flex;
		justify-content: center;
		color: black;
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

	/* li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	} */
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
</style>
