<div class="layout {$$restProps.class}">
	<div class="layout__wrapper">
		<header class="layout__header" data-screen-only>
			<h1><slot name="title"></slot></h1>
			<nav class="layout__nav">
				<a href="/">Home</a> |
				<a href="/resume">Resume</a>
			</nav>
		</header>
		<header data-print-only>
			<h1><slot name="title-print"></slot></h1>
		</header>
		<main>
			<slot></slot>
		</main>
		<footer class="layout__footer layout__footer--screen" data-screen-only>
			<nav class="layout__nav">
				<small>
					Website handmade with ❤️ and Svelte by Alessandro Bellini |
					<a href="https://www.linkedin.com/in/ilmente/" target="_blank">Linkedin</a> |
					<a href="https://github.com/ilmente/" target="_blank">Github</a>
				</small>
			</nav>
		</footer>
		<footer class="layout__footer" data-print-only>
			<slot name="footer-print"></slot>
		</footer>
	</div>
</div>

<style>
	.layout__wrapper {
		margin: auto;
	}

	.layout__header {
		margin-top: 10rem;
	}

	.layout__nav {
		margin: 1rem 0;
		color: var(--color-text-alt);
	}

	.layout__footer {
		text-align: right;
	}

	.layout__footer--screen {
		margin-bottom: 3rem;
	}

	@media only screen {
		.layout {
			border-top: 1rem solid var(--color-main);
		}

		.layout__wrapper {
			max-width: 60rem;
			padding: 3rem;
		}
	}

	@media only print {
		.layout__wrapper {
			padding: 2rem;
		}
	}

	@media screen and (max-width: 800px) {
		.layout__header {
			margin-top: 6rem;
		}

		.layout__wrapper {
			padding: 1rem;
		}
	}
</style>
