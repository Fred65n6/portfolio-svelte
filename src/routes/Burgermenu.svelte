<!-- <script>
	import { page } from '$app/stores';
</script>

<body>
	<label>
		<input type="checkbox" />
		<span class="menu"> <span class="hamburger" /> </span>

		<ul>
			<li><img src="FM.svg" alt="" /></li>
			<br />
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">FORSIDE</a>
			</li>
			<li class:active={$page.url.pathname === '/Portfolio'}>
				<a sveltekit:prefetch href="/Portfolio">PORTFOLIO</a>
			</li>
			<li class:active={$page.url.pathname === '/Om_mig'}>
				<a sveltekit:prefetch href="/Om_mig">OM MIG</a>
			</li>
		</ul>
	</label>
</body>

<style>
	@media (max-width: 650px) {
		*,
		*:before,
		*:after {
			box-sizing: border-box;
		}

		body {
			font-size: 1.2em;
			line-height: 1.6;
			overflow-x: hidden;
		}

		img {
			width: 60px;
			filter: invert(1);
		}

		label .menu {
			position: fixed;
			right: -100px;
			top: -100px;
			z-index: 4;
			width: 200px;
			height: 200px;
			background: white;
			border-radius: 50% 50% 50% 50%;
			-webkit-transition: 0.5s ease-in-out;
			transition: 0.5s ease-in-out;
			box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
			cursor: pointer;
		}

		label .hamburger {
			position: absolute;
			top: 135px;
			left: 50px;
			width: 30px;
			height: 3px;
			background: black;
			border-radius: 12px;
			display: block;
			-webkit-transform-origin: center;
			transform-origin: center;
			-webkit-transition: 0.5s ease-in-out;
			transition: 0.5s ease-in-out;
		}

		label .hamburger:after,
		label .hamburger:before {
			-webkit-transition: 0.5s ease-in-out;
			transition: 0.5s ease-in-out;
			content: '';
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
			background: black;
			border-radius: 12px;
		}

		label .hamburger:before {
			top: -10px;
		}

		label .hamburger:after {
			bottom: -10px;
		}

		label input {
			display: none;
		}

		label input:checked + .menu {
			box-shadow: 0 0 0 100vw #fff, 0 0 0 100vh #fff;
			border-radius: 0;
		}

		label input:checked + .menu .hamburger {
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
		}

		label input:checked + .menu .hamburger:after {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
			bottom: 0;
		}

		label input:checked + .menu .hamburger:before {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
			top: 0;
		}

		label input:checked + .menu + ul {
			opacity: 1;
		}

		label ul {
			position: fixed;
			display: grid;
			place-items: center;
			text-align: center;
			z-index: 200;
			gap: 20px;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			opacity: 0;
			-webkit-transition: 0.25s 0s ease-in-out;
			transition: 0.25s 0s ease-in-out;
		}

		label a {
			margin-bottom: 1em;
			display: block;
			color: black;
			text-decoration: none;
		}
	}

	@media (min-width: 650px) {
		label {
			display: none;
		}
	}
</style> -->
