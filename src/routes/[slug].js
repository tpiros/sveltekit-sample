import { client } from '$lib/contentful';

export async function get({ params }) {
	const { items: products } = await client.getEntries({
		'fields.slug': params.slug,
		content_type: 'product'
	});
	const [product] = products;

	if (product) {
		return {
			body: { product }
		};
	}

	return {
		status: 404
	};
}
