<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	export let products;
	let myCloudinary;
	if (browser) {
		onMount(async () => {
			const source = {
				shoppable: {
					transformation: {
						crop: 'pad',
						aspect_ratio: '1'
					},
					products: [
						{
							productId: 1,
							productName: 'Sunglasses',
							startTime: 0,
							endTime: 2,
							publicId: 'docs/shoppable_sunglasses',
							hotspots: [
								{
									time: '00:02',
									x: '50%',
									y: '50%',
									tooltipPosition: 'left',
									clickUrl:
										'https://cloudinary.com/blog/get_interactive_with_cloudinary_s_shoppable_video_and_video_player'
								}
							],
							onHover: {
								action: 'overlay',
								args: 'Click to see this product in the video'
							},
							onClick: {
								action: 'seek',
								pause: 5,
								args: {
									time: '00:02'
								}
							}
						},
						{
							productId: 2,
							productName: 'Green Dress',
							startTime: 2,
							endTime: 5,
							publicId: 'docs/shoppable_dress',
							onClick: {
								action: 'goto',
								pause: true,
								args: {
									url: 'https://cloudinary.com/blog/get_interactive_with_cloudinary_s_shoppable_video_and_video_player'
								}
							}
						},
						{
							productId: 3,
							productName: 'Brown Bag',
							startTime: 7,
							endTime: 11,
							publicId: 'docs/shoppable_bag',
							onHover: {
								action: 'switch',
								args: {
									publicId: 'docs/shoppable_bag2'
								}
							},
							onClick: {
								action: 'goto',
								pause: true,
								args: {
									url: 'https://cloudinary.com/blog/get_interactive_with_cloudinary_s_shoppable_video_and_video_player'
								}
							}
						}
					]
				}
			};

			// player.source('docs/shoppable_demo', source);

			myCloudinary = window.cloudinary.Cloudinary.new({ cloud_name: 'demo' });
			const demoplayer = myCloudinary.videoPlayer('doc-player').width(600);
			demoplayer.source('docs/shoppable_demo', source);
		});
	}
</script>

<svelte:head>
	<link
		href="https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.css"
		rel="stylesheet"
	/>
	<script
		src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js"
		type="text/javascript"></script>
	<script
		src="https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.js"
		type="text/javascript"></script>
</svelte:head>

<h1>Products</h1>
<video id="doc-player" controls muted class="cld-video-player cld-fluid" />
<ul>
	{#each products as product}
		{product.fields.slug}
		<li><a href="/{product.fields.slug}">{product.fields.name} ({product.fields.slug})</a></li>
	{/each}
</ul>
