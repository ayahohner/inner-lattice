# Social preview artwork

A woven charcoal and muted-bronze lattice folding around an open center, on an off-white field. Generated with the built-in image-generation tool, then center-cropped and compressed as JPEG using Sharp. No text is embedded, so the same composition survives small thumbnails and square crops; each page supplies its own title and description.

- `inner-lattice-v1.jpg`: 1200 × 630 (1.905:1), default Open Graph image.
- `inner-lattice-x-v1.jpg`: 1200 × 600 (2:1), X large-image card.
- `inner-lattice-square-v1.jpg`: 1080 × 1080 (1:1), standalone square export; not advertised as a competing Open Graph image.

The shared Astro layout emits absolute HTTPS image URLs, dimensions, MIME type and alt text in server-rendered HTML. Open Graph supports link previews in clients including Facebook, Discord, WhatsApp, Telegram and Bluesky; the actual layout and refresh timing belong to each client. X has separate Twitter Card metadata. This is link-preview configuration, not a promise that every client will select the same crop. No messages or social posts were sent for testing.

Version filenames when replacing artwork so image caches can refresh. Existing shared links may also retain cached page metadata.

References: [Open Graph image properties](https://ogp.me/), [Bluesky website-card embeds](https://docs.bsky.app/blog/create-post), [Apple rich link previews](https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages/).

## Generation prompt

Create a refined editorial artwork for 'inner lattice', a minimalist philosophical blog about consciousness, cosmology, ontology, systems thinking, and artificial intelligence. Landscape image approximately 1.91:1 ratio, ideally 1536x800 or larger. On a luminous warm off-white almost paper-white background, one exquisitely intricate sculptural lattice made of very fine charcoal gray and muted pewter threads folds and curves inward around a small quiet luminous void. A graceful organic mathematical surface, like a topological manifold woven from fine wire, with subtle moire interference and spatial depth, evocative of awareness emerging from relational structure. Beautiful, contemplative, precise, intellectually rich; restrained Swiss editorial art direction, tactile photographic rendering of an impossible wire sculpture, soft daylight, subtle warm shadows, slight desaturated bronze at a few intersections. The sculpture occupies the central 48 percent of image width and central 75 percent of height; enough surrounding negative space that a centered square crop still contains its core shape. Strong recognizable silhouette and tonal contrast at thumbnail sizes. No text, lettering, logos, borders, gradients-as-background, stars, space scenes, brains, eyes, faces, neon, circuit boards or generic AI imagery. This should feel commissioned for an exceptional contemporary philosophy journal. Produce a single finished image.
