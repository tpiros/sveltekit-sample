import { client } from '$lib/contentful';
export async function get() {
	const { items: products } = await client.getEntries({
		content_type: 'product'
	});
	return {
		body: { products }
	};
}
