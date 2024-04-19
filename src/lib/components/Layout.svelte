<div class="layout {$$restProps.class}">
	<div data-wrapper>
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
		<footer data-screen-only>
			<nav class="layout__nav layout__nav--right">
				<a href="https://github.com/ilmente/" target="_blank">Github</a> |
				<a href="https://www.linkedin.com/in/ilmente/" target="_blank">Linkedin</a> | ilmente.com
			</nav>
		</footer>
	</div>
</div>

<style>
	.layout {
		position: relative;
		border-top: 1rem solid var(--color-main);
	}

	.layout__header {
		margin-top: 10rem;
	}

	.layout__nav {
		margin: 1rem 0;
		color: var(--color-text-alt);
	}

	.layout__nav--right {
		text-align: right;
	}
</style>
