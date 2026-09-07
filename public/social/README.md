# Social preview artwork

Broad translucent planes flowing past one another in silver, slate blue and warm amber on an ivory field. Generated with the built-in image-generation tool, then center-cropped and compressed as JPEG using Sharp. No text is embedded, so the same composition survives small thumbnails and square crops; each page supplies its own title and description.

- `inner-lattice-v2.jpg`: 1200 × 630 (1.905:1), default Open Graph image.
- `inner-lattice-x-v2.jpg`: 1200 × 600 (2:1), X large-image card.
- `inner-lattice-square-v2.jpg`: 1080 × 1080 (1:1), standalone square export; not advertised as a competing Open Graph image.

The shared Astro layout emits absolute HTTPS image URLs, dimensions, MIME type and alt text in server-rendered HTML. Open Graph supports link previews in clients including Facebook, Discord, WhatsApp, Telegram and Bluesky; the actual layout and refresh timing belong to each client. X has separate Twitter Card metadata. This is link-preview configuration, not a promise that every client will select the same crop. No messages or social posts were sent for testing.

Version filenames when replacing artwork so image caches can refresh. Existing shared links may also retain cached page metadata.

References: [Open Graph image properties](https://ogp.me/), [Bluesky website-card embeds](https://docs.bsky.app/blog/create-post), [Apple rich link previews](https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages/).

## Generation prompt (v2)

Create a single exceptionally tasteful editorial artwork for inner lattice, a neo-minimalist philosophical journal about consciousness, cosmology, interconnected systems and emergence. Wide landscape approximately 1.91:1. A quiet composition of three broad, continuous, silky translucent planes curving gently past one another, like sheets of frosted glass or softly folded tracing paper, suspended over a warm ivory background. Their overlapping edges create a subtle sense of relationships and depth. Smooth unbroken surfaces, large simple shapes, graceful asymmetry, soft natural side lighting and very gentle shadows. Restrained palette of warm off-white, smoky slate blue, pale silver and a hint of muted amber at a single overlapping edge. Material, sculptural, contemplative, sophisticated contemporary editorial photography, not generic technology art. Main subject occupies the central 45 percent of the width and central 70 percent of the height, with generous negative space so both wide and centered square crops work. Absolutely NO lattice mesh, wire, holes, pores, dots, bubbles, cells, honeycomb, perforations, dense repeated patterns, tiny cavities, granular textures, biological imagery, eyes, brains, neon, stars, text, lettering, logos, borders. No closed loops or ring-shaped objects. Only a few broad smooth flowing surfaces. Single finished artwork, no mockup.

The v1 assets remain available for already-cached links; current metadata uses v2.
