<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="corner">
			<a sveltekit:prefetch href="/">
				<img class="hover:pulsate-fwd" src="./FM.svg" alt="SvelteKit" />
			</a>
		</div>

		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">HOME</a>
				</li>
				<li class:active={$page.url.pathname === '/Portfolio'}>
					<a sveltekit:prefetch href="/Portfolio">Portfolio</a>
				</li>
				<li class:active={$page.url.pathname === '/Om_mig'}>
					<a sveltekit:prefetch href="/Om_mig">ABOUT ME</a>
				</li>
			</ul>
		</div>
		<div class="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
				<span />
			</label>

			<ul class="menu__box">
				<div class="corner">
					<a sveltekit:prefetch href="/">
						<img class="hover:pulsate-fwd" src="./FM.svg" alt="SvelteKit" />
					</a>
				</div>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">HOME</a>
				</li>
				<li class:active={$page.url.pathname === '/Portfolio'}>
					<a sveltekit:prefetch href="/Portfolio">Portfolio</a>
				</li>
				<li class:active={$page.url.pathname === '/Om_mig'}>
					<a sveltekit:prefetch href="/Om_mig">ABOUT ME</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	/* @media (min-width: 650px) { */
	header {
		position: fixed;
		display: flex;
		justify-content: space-between;
		top: 0;
		z-index: 3;
		width: 100%;
		border-bottom: solid 1px black;
		padding: 10px;
		align-items: center;
		background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)),
			url(https://grainy-gradients.vercel.app/noise.svg);
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	.corner img {
		filter: invert(1);
		height: 2rem;
	}

	a:hover {
		color: rgb(0, 115, 157);
		transition: color 0.2s linear;
	}

	nav {
		position: sticky;
		width: 100%;
		display: flex;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 400;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	.hamburger-menu li {
		padding: 1rem;
		margin-top: 2rem;
	}

	#menu__toggle {
		opacity: 0;
	}

	#menu__toggle:checked ~ .menu__btn > span {
		transform: rotate(45deg);
	}
	#menu__toggle:checked ~ .menu__btn > span::before {
		top: 0;
		transform: rotate(0);
	}
	#menu__toggle:checked ~ .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}
	#menu__toggle:checked ~ .menu__box {
		visibility: visible;
		right: 0;
	}

	.menu__btn {
		display: flex;
		align-items: center;
		position: fixed;
		top: 15px;
		right: 20px;

		width: 26px;
		height: 22px;

		cursor: pointer;
		z-index: 1;
	}

	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
		display: block;
		position: absolute;

		width: 100%;
		height: 2.5px;
		border-radius: 12px;

		background-color: #1c1c1c;

		transition-duration: 0.25s;
	}
	.menu__btn > span::before {
		content: '';
		top: -8px;
	}
	.menu__btn > span::after {
		content: '';
		top: 8px;
	}

	.menu__box {
		display: flex;
		flex-direction: column;
		position: fixed;
		visibility: hidden;
		top: 0;
		right: -100%;

		width: 100%;
		height: 100%;

		margin: 0;
		padding: 80px 0;

		list-style: none;

		background: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
			url(https://grainy-gradients.vercel.app/noise.svg);

		transition-duration: 0.25s;
	}

	@media (max-width: 650px) {
		.desktop-menu {
			display: none;
		}
	}

	@media (min-width: 650px) {
		.hamburger-menu {
			display: none;
		}
	}
</style>
