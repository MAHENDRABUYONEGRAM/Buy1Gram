import { j as createVNode, F as Fragment, s as spreadAttributes } from '../renderers.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'node:fs/promises';
import 'cookie';
import 'kleur/colors';
import 'mime';
import 'string-width';
import 'react';
import 'react-dom/server';
import 'fs';
import 'path';
import 'html-escaper';
import 'node:worker_threads';
import 'os';
import 'url';
import 'module';
import 'worker_threads';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>In this blog post, I will share with you some of the benefits of using styled components, a CSS-in-JS library that lets you write CSS code as JavaScript objects. Styled components are a great way to style your React components with dynamic and scoped styles, without worrying about class names, specificity, or global conflicts.</p>\n<p>Styled components are based on the concept of tagged template literals, a feature of ES6 that allows you to embed expressions in template strings. This means that you can write your CSS code as a function that takes props as arguments and returns a string of CSS rules. For example, you can create a styled button component like this:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> styled </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">\"styled-components\"</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #E1E4E8\"> styled.</span><span style=\"color: #B392F0\">button</span><span style=\"color: #9ECBFF\">`</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  background-color: ${</span><span style=\"color: #79B8FF\">props</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #F97583\">=></span><span style=\"color: #9ECBFF\"> (</span><span style=\"color: #E1E4E8\">props</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">primary</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #F97583\">?</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #9ECBFF\">\"blue\"</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #F97583\">:</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #9ECBFF\">\"white\"</span><span style=\"color: #9ECBFF\">)</span><span style=\"color: #9ECBFF\">};</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  color: ${</span><span style=\"color: #79B8FF\">props</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #F97583\">=></span><span style=\"color: #9ECBFF\"> (</span><span style=\"color: #E1E4E8\">props</span><span style=\"color: #9ECBFF\">.</span><span style=\"color: #E1E4E8\">primary</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #F97583\">?</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #9ECBFF\">\"white\"</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #F97583\">:</span><span style=\"color: #9ECBFF\"> </span><span style=\"color: #9ECBFF\">\"blue\"</span><span style=\"color: #9ECBFF\">)</span><span style=\"color: #9ECBFF\">};</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  padding: 10px;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  border: none;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">  border-radius: 5px;</span></span>\n<span class=\"line\"><span style=\"color: #9ECBFF\">`</span></span></code></pre>\n<p>Then, you can use the Button component in your React code like this:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> React </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'react'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> Button </span><span style=\"color: #F97583\">from</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">'./Button'</span><span style=\"color: #E1E4E8\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">function</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">App</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #F97583\">return</span><span style=\"color: #E1E4E8\"> (</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #85E89D\">div</span><span style=\"color: #E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">primary</span><span style=\"color: #E1E4E8\">>Primary Button&#x3C;/</span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;</span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\">>Secondary Button&#x3C;/</span><span style=\"color: #79B8FF\">Button</span><span style=\"color: #E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">&#x3C;/</span><span style=\"color: #85E89D\">div</span><span style=\"color: #E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">export</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #F97583\">default</span><span style=\"color: #E1E4E8\"> App;</span></span></code></pre>\n<p>This will render two buttons with different colors, depending on the primary prop. You can also pass any other valid HTML attributes to the Button component, such as onClick, disabled, etc.<br>\n<br>\nSome of the advantages of using styled components are:</p>\n<p>You can write your CSS code in the same file as your React component, which makes it easier to maintain and debug.\\</p>\n<ul>\n<li>You can use JavaScript variables and functions in your CSS code, which gives you more flexibility and power to create dynamic and responsive styles.\\</li>\n<li>You can avoid class name collisions and specificity issues, as styled components generate unique class names for each component and inject them into the head of the document.\\</li>\n<li>You can leverage the power of CSS preprocessors, such as Sass or Less, by using the styled-components/macro package, which enables features such as nesting, mixins, variables, etc.</li>\n</ul>\n<p>If you want to learn more about styled components, you can check out their official website (<a href=\"https://styled-components.com/\">https://styled-components.com/</a>) or their GitHub repository (<a href=\"https://github.com/styled-components/styled-components\">https://github.com/styled-components/styled-components</a>). You can also find many tutorials and examples online that show how to use styled components in different scenarios and with different libraries.<br>\n<br>\nI hope you enjoyed this blog post and found it useful. If you have any questions or feedback, feel free to leave a comment below. Thanks for reading!</p>");

				const frontmatter = {"heroImage":"https://res.cloudinary.com/practicaldev/image/fetch/s--iKV_2Ulf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ce27dyfg7v46855iabnc.png","title":"Styled Components","pubDate":"2023-07-01T02:15:39.576Z","description":"Getting Started With Styled Components"};
				const file = "E:/Buy1Gram/src/content/blog/styled-components.md";
				const url = undefined;
				function rawContent() {
					return "\nIn this blog post, I will share with you some of the benefits of using styled components, a CSS-in-JS library that lets you write CSS code as JavaScript objects. Styled components are a great way to style your React components with dynamic and scoped styles, without worrying about class names, specificity, or global conflicts.\n\nStyled components are based on the concept of tagged template literals, a feature of ES6 that allows you to embed expressions in template strings. This means that you can write your CSS code as a function that takes props as arguments and returns a string of CSS rules. For example, you can create a styled button component like this:\n\n```typescript\nimport styled from \"styled-components\"\n\nconst Button = styled.button`\n  background-color: ${props => (props.primary ? \"blue\" : \"white\")};\n  color: ${props => (props.primary ? \"white\" : \"blue\")};\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n`\n```\n\nThen, you can use the Button component in your React code like this:\n\n```tsx\nimport React from 'react';\nimport Button from './Button';\n\nfunction App() {\nreturn (\n<div>\n<Button primary>Primary Button</Button>\n<Button>Secondary Button</Button>\n</div>\n);\n\nexport default App;\n```\n\nThis will render two buttons with different colors, depending on the primary prop. You can also pass any other valid HTML attributes to the Button component, such as onClick, disabled, etc.\\\n\\\nSome of the advantages of using styled components are:\n\nYou can write your CSS code in the same file as your React component, which makes it easier to maintain and debug.\\\n\n- You can use JavaScript variables and functions in your CSS code, which gives you more flexibility and power to create dynamic and responsive styles.\\\n- You can avoid class name collisions and specificity issues, as styled components generate unique class names for each component and inject them into the head of the document.\\\n- You can leverage the power of CSS preprocessors, such as Sass or Less, by using the styled-components/macro package, which enables features such as nesting, mixins, variables, etc.\n\nIf you want to learn more about styled components, you can check out their official website (https://styled-components.com/) or their GitHub repository (https://github.com/styled-components/styled-components). You can also find many tutorials and examples online that show how to use styled components in different scenarios and with different libraries.\\\n\\\nI hope you enjoyed this blog post and found it useful. If you have any questions or feedback, feel free to leave a comment below. Thanks for reading!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };