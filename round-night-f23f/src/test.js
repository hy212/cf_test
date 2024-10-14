/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		let value = await env.testEnv.get("key");
		const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
				prompt: "what the color of sunflowers"
			}
		);
		return new Response(JSON.stringify({
			kv: value,
			aiRes: response
		}));
	},
};
