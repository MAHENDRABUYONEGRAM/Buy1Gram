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

				const html = updateImageReferences("");

				const frontmatter = {"srNo":40,"productName":"MIXED PULSES FOR SPROUT","category":["Dal & Pulses"],"productDetails":{"price":{"Price500":69,"Price1":140},"productImage":{"Image500":"https://i.imgur.com/lEwvKNd.png","Image1":"https://i.imgur.com/HIP9Lgk.png"}}};
				const file = "E:/Buy1Gram/src/content/products/mixed-pulses-for-sprout.md";
				const url = undefined;
				function rawContent() {
					return "";
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