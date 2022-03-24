<script>
	import { page } from '$app/stores';
</script>

<!--    Made by Erik Terwan    -->
<!--   24th of November 2015   -->
<!--        MIT License        -->

<nav role="navigation">
	<div id="menuToggle">
		<!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->

		<input type="checkbox" />

		<!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
		<span />
		<span />
		<span />

		<!--</div>
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
		<ul id="menu">
			<li><img src="Fm.svg" alt="FM" /></li>
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
	</div>
</nav>

<style>
	@media (max-width: 650px) {
		#menuToggle {
			display: block;
			position: fixed;
			top: 50px;
			left: 50px;
			z-index: 1;
			-webkit-user-select: none;
			user-select: none;
		}

		#menuToggle a {
			text-transform: uppercase;
			text-decoration: none;
			color: #232323;

			transition: color 0.3s ease;
		}

		#menuToggle a:hover {
			color: rgb(0, 115, 157);
			transition: color 0.4s linear;
		}

		img {
			width: 4rem;
			filter: invert(1);
			margin: 0 auto;
			padding-block: 2rem;
		}

		#menuToggle input {
			display: block;
			width: 40px;
			height: 32px;
			position: absolute;
			top: -7px;
			left: -5px;
			cursor: pointer;
			opacity: 0; /* hide this */
			z-index: 2; /* and place it over the hamburger */
			-webkit-touch-callout: none;
		}

		/*
 * Just a quick hamburger
 */
		#menuToggle span {
			display: block;
			width: 33px;
			height: 4px;
			margin-bottom: 5px;
			position: relative;
			background: black;
			border-radius: 3px;
			z-index: 1;
			transform-origin: 4px 0px;
			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
				background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
		}

		#menuToggle span:first-child {
			transform-origin: 0% 0%;
		}

		#menuToggle span:nth-last-child(2) {
			transform-origin: 0% 100%;
		}

		/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
		#menuToggle input:checked ~ span {
			opacity: 1;
			transform: rotate(45deg) translate(-2px, -1px);
			background: #232323;
		}

		/*
 * But let's hide the middle one.
 */
		#menuToggle input:checked ~ span:nth-last-child(3) {
			opacity: 0;
			transform: rotate(0deg) scale(0.2, 0.2);
		}

		/*
 * Ohyeah and the last one should go the other direction
 */
		#menuToggle input:checked ~ span:nth-last-child(2) {
			transform: rotate(-45deg) translate(0, -1px);
		}

		/*
 * Make this absolute positioned
 * at the top left of the screen
 */
		#menu {
			position: absolute;
			width: 100vw;
			height: 110vh;
			margin: -100px 0 0 -50px;
			padding: 50px;
			padding-top: 12rem;
			text-align: center;
			background: linear-gradient(to right, rgba(233, 231, 231, 1), rgba(255, 255, 255, 1)),
				url(https://grainy-gradients.vercel.app/noise.svg);
			list-style-type: none;
			-webkit-font-smoothing: antialiased;
			transform-origin: 0% 0%;
			transform: translate(-100%, 0);
			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
		}

		#menu li {
			padding: 10px 0;
			font-size: 22px;
		}

		/*
 * And let's slide it in from the left
 */
		#menuToggle input:checked ~ ul {
			transform: none;
		}
	}

	@media (min-width: 650px) {
		nav {
			display: none;
		}
	}
</style>
