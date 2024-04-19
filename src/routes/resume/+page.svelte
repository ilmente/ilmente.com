<script>
	import Layout from '$lib/components/Layout.svelte';
</script>

<Layout class="resume">
	<svelte:fragment slot="title">Resume</svelte:fragment>
	<svelte:fragment slot="title-print">Alessandro Bellini</svelte:fragment>
	<p data-screen-only>
		This is my official <em>curriculum vitae</em>.
		<br />
		It is actually printable (formatted for A4 - remove all the margins for a better result), but save
		some paper and just create a pdf.
	</p>

	<div data-grid>
		<section>
			<ul>
				<li><a href="https://ilmente.com" taregt="_blank">ilmente.com</a></li>
				<li>
					<a href="https://www.linkedin.com/in/ilmente" target="_blank">linkedin.com/in/ilmente</a>
				</li>
				<li><a href="https://github.com/ilmente" target="_blank">github.com/ilmente</a></li>
			</ul>
		</section>
		<section>
			<h2>Hi! 👋</h2>
			<p>
				I'm a frontend enthusiast and a proper nerd. I do enjoy coding.
				<br />
				In recent years I focused mainly on frontend architecture design for ecommerce platforms. I love
				data flow and state managements, when thoroughly thought; functional and smooth UIs; solid testing,
				especialy when made easy to maintain.
				<br />
				When leading, I do invest time in building cohesive teams where everyone - me included - should
				have the time and opportunity to grow (*) as professional.
				<br />
				<small>
					* Sourceability supported me in creating a program where the team read and presented one
					book a month, during dedicated working hours. Getting paid to learn: how cool is that?
				</small>
			</p>
		</section>
	</div>

	<div data-grid>
		<section>
			<h2>Feelings 💙</h2>
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

			<h3>I am a&#8230; 😎</h3>
			<ul>
				<li>competitor with myself</li>
				<li>good mediator</li>
				<li>knowledge consumer</li>
				<li>coffee maker</li>
				<li>challenge accepter</li>
				<li>uncoordinated dancer</li>
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
			<h2>Experience 💻</h2>
			<h4>Co-Founder, Chief Clock Architect</h4>
			<h5>2022-*, hTime.io @ remotely, mostly Berlin, DE</h5>
			<p>
				As Chief Clock Architect (read "developer") my main goal is to design, implement and
				maintain the code behind{' '}
				<a href="https://hTime.io" target="_blank">hTime.io</a>.
				<br />
				<small>#sidehustle #everybodyisacofindertoday #typescript #react #nextjs</small>
			</p>

			<h4>Frontend Architect</h4>
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

	<div data-grid>
		<section>
			<h2>Expertise 🚀</h2>
			<ul>
				<li>frontend development</li>
				<li>frontend architecture design</li>
				<li>team leading</li>
				<li>italian food and wine</li>
			</ul>
		</section>
		<section>
			<h2>Education 🎓</h2>
			<h4>Bachelor in Sociology</h4>
			<p>
				<em>Università degli Studi di Firenze</em>, 2010.
			</p>
			<h3>Languages 🚩</h3>
			<p>Fluent Italian; good English.</p>
		</section>
	</div>
</Layout>
