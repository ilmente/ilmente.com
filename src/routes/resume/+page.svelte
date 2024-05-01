<script>
	import { page } from '$app/stores';
	import Layout from '$lib/components/Layout.svelte';

	let phone = $page.url.searchParams.get('phone');
	let email = $page.url.searchParams.get('email');
</script>

<Layout class="resume">
	<svelte:fragment slot="title">Resume</svelte:fragment>
	<svelte:fragment slot="title-print">Alessandro Bellini</svelte:fragment>
	<p data-screen-only>
		This is my official <em>curriculum vitae</em>.
		<br />
		It is actually printable 🖨️ (formatted for A4 sheets), but save some paper 🌳 and just create a pdf.
	</p>

	<div class="resume__grid">
		<section>
			<ul>
				<li>📍 Berlin, or remotly</li>
				{#if phone}<li>📱 <a href="callto:{phone}">{phone}</a></li>{/if}
				{#if email}<li>📫 <a href="mailto:{email}">{email}</a></li>{/if}
				<li><a href="https://ilmente.com" taregt="_blank">🌍 ilmente.com</a></li>
				<li>
					<a href="https://www.linkedin.com/in/ilmente" target="_blank"
						>😎 linkedin.com/in/ilmente</a
					>
				</li>
				<li><a href="https://github.com/ilmente" target="_blank">🤓 github.com/ilmente</a></li>
			</ul>
		</section>
		<section>
			<h2>Hi! 👋</h2>
			<p>
				I'm a frontend enthusiast, a proper geek. I do enjoy coding.
				<br />
				In recent years I focused mainly on architecture design for ecommerce platforms. I love data
				flow and state managements, when thoroughly thought; functional and smooth UIs; solid testing,
				especialy when made easy to maintain.
				<br />
				Slowly, I managed to move away from an exclusively hands-on approach and got more and more involved
				with product development. That was made possible by investing time in building cohesive teams
				where everyone - me included - had the time and opportunity to grow (*) as professional, hence
				increasing trust and delegation.
				<br />
				<small>
					* Sourceability even supported me in creating a program where the team read and presented
					one book a month, during dedicated working hours. Getting paid to learn: how cool is that?
				</small>
			</p>
		</section>
	</div>

	<div class="resume__grid">
		<section>
			<h2>Feelings 💚</h2>
			<p>
				<strong>In a strong and romantic relationship with</strong> HTML (and Twig), CSS (BEM, Sass,
				Less), Javascript (ES5.1, 6, 7 and counting), Typescript, React, Vue, Webpack, Vite, Cypress,
				Jest, Git.
			</p>
			<p>
				<strong>Having an affaire with</strong> PWA, Svelte, NextJs, Functional Programming.
			</p>
			<p>
				<strong>Had a couple of dates with</strong> RxJS, GraphQL, Php.
			</p>

			<h3>I am a&#8230;</h3>
			<ul class="bullet">
				<li>frontend geek</li>
				<li>good mediator</li>
				<li>watch enthusiast</li>
				<li>backpacks lover <small>#weirdo</small></li>
				<li>photography amateur</li>
				<li>big time traveler</li>
				<li>challenge accepter</li>
				<li>mediocre bass player</li>
				<li>out-of-tune singer</li>
				<li>uncoordinated dancer</li>
				<li>coffee maker</li>
				<li>
					hard worker <small>#cliché</small>
				</li>
				<li>
					team worker <small>#cliché</small>
				</li>
				<li>service worker</li>
			</ul>
		</section>
		<section>
			<h2>Experience 🚀</h2>
			<h4>Co-Founder, Chief Clock Architect</h4>
			<h5>2022-*, hTime.io @ remotely, mostly Berlin, DE</h5>
			<p>
				As Chief Clock Architect (read "developer") my main goal is to design, implement and
				maintain the code behind{' '}
				<a href="https://hTime.io" target="_blank">hTime.io</a>.
				<br />
				<small>#sidehustle #everybodyisacofindertoday #typescript #react #nextjs</small>
			</p>

			<h4>Lead Frontend Architect</h4>
			<h5>2019-2023, Sourceability @ remotely, mostly Berlin, DE</h5>
			<p>
				My main responsibility was to (re)design the frontend architecture and maintain{' '}
				<a href="https://sourcengine.com" target="_blank"> sourcengine.com </a>{' '}
				B2B ecommerce platform and other internal projects. Particularly interesting was co-designing
				the BDD inspired, E2E testing suite using Cypress and Cucumber. To achieve that, I could count
				on a small amazing team of engineers and designers.
				<br />
				<small>#dream-team #typescript #vue #pinia #cypress #cucumber #bdd</small>
			</p>

			<h4>Frontend Architect</h4>
			<h5>2015-2019, Spryker @ Berlin, DE</h5>
			<p>
				Started as developer in the core team, I <em>grew up</em>{' '}
				architect in 2018, becoming responsible for SprykerOS vast and highly modular frontend architecture
				and providing tailored solutions for customers.
				<br />
				<small
					>#typescript #webcomponents #reactdeepdive #webpack #jsthegoodpart #cleancode #backtostudy
					#backtobasics</small
				>
			</p>

			<h4>Frontend Developer</h4>
			<h5>2013-2015, Lutech Mobile @ Milano, IT</h5>
			<p>
				In this mobile oriented agency, I was lead developer of a small team, mainly focused on
				cross-platform and/or hybrid applications development.
				<br />
				<small
					>#jquerydays #rafdays #angularone #cordova #ibm #worklight #ios #android
					#evenwindowsmobile</small
				>
			</p>

			<h4>Fullstack Developer</h4>
			<h5>2011-2012, Extra.it @ Milano, IT</h5>
			<p>
				Started as backend developer, I soon switched and focused mainly on frontend. My role in the
				agency was to implement UIs for customers' .net web applications.
				<br />
				<small>#jquerydays #backbone #dotnet #frontendloveatfirstcode</small>
			</p>

			<h4>And...</h4>
			<h5>2006-2010 @ Pistoia, IT</h5>
			<p>
				Web developer freelance, graphic designer in a printing factory, "computer" teacher in a
				private primary school and tutor in adult education programs (such as web development
				fundamentals and wordpress theming).
				<br />
				<small
					>#jquerydays #spaghettidays #adobesuite #iloveteaching #onewordpresstorulethemall
					#jackofalltrades</small
				>
			</p>
		</section>
	</div>

	<div class="resume__grid">
		<section>
			<h2>Expertise 👨‍🍳</h2>
			<ul class="bullet">
				<li>all things frontend</li>
				<li>software architecture design</li>
				<li>product development</li>
				<li>team leading and coaching</li>
				<li>italian food and wine</li>
			</ul>
		</section>
		<section>
			<h2>Education 🎓</h2>
			<h4>Bachelor in Sociology</h4>
			<p>
				<em>Università degli Studi di Firenze</em>, 2010.
			</p>
			<h3>Languages</h3>
			<p>Native Italian, fluent English.</p>
		</section>
	</div>
	<svelte:fragment slot="footer-print">
		<small>Printed directly from <a href="https://ilmente.com/resume">ilmente.com/resume</a></small>
	</svelte:fragment>
</Layout>

<style>
	.resume__grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1rem;
		margin: 2rem 0;
	}

	@media only print {
		.resume__grid {
			grid-template-columns: 1fr 3fr;
		}
	}

	@media screen and (max-width: 800px) {
		.resume__grid {
			display: block;
			margin: 1rem 0;
		}
	}
</style>
