# Site Map & Creative Direction — Draft v1

Draft based on what we know: high-end salon, black-and-white marble interior. To be refined with questionnaire answers, then approved by the client before design.

## Site map

```
Home
├── Services & Pricing
├── Team (stylists)
├── Gallery (before / after)
├── About (story + the space)
├── Contact & Booking
└── Legal (privacy, booking policy)
```

### Homepage sections (in conversion order)
1. **Hero** — full-bleed marble texture, salon name, one-line promise, primary CTA "Book an appointment", secondary "View services".
2. **Trust bar** — Google rating ★, review count, years open, partner brands (logos in monochrome).
3. **Signature services** — 3–4 featured services with "from" price and duration; link to full menu.
4. **The transformation** — before/after slider (the signature moment, see below).
5. **The space** — editorial photos of the marble interior; short paragraph about the experience.
6. **Meet the team** — stylist portraits (black & white), specialty, "Book with …" button.
7. **Testimonials** — 3–5 real reviews with names / first initials.
8. **Booking CTA band** — "Your chair is waiting", book button, phone, hours.
9. **Footer** — address + map link, hours, Instagram, policies.

### Inner pages
- **Services & Pricing**: grouped menu (Cut & Style, Colour, Treatments, Extensions, Bridal), filter by category, stylist-level pricing toggle if applicable.
- **Team**: full bios, specialties, Instagram links, per-stylist booking.
- **Gallery**: filterable grid (colour, cuts, bridal), before/after pairs.
- **About**: story, values, the space, products used.
- **Contact & Booking**: embedded booking widget or deep link, map, hours, policies, FAQ.

## Creative direction

**Positioning:** *Premium, not luxury* (to confirm). Polished, calm and confident. Expensive-looking but welcoming, so new clients aren't scared off by price.

### Mood board A — "Marble Editorial"
- White-marble dominant pages, black type, lots of whitespace.
- Large serif display type (e.g. *Cormorant Garamond* / *Playfair Display*) + clean sans body (*Inter* / *Manrope*).
- Black & white photography, one subtle accent (champagne gold `#C8B48A`) used sparingly.
- Slow fades, gentle parallax on marble veins.

### Mood board B — "Noir Cinematic"
- Black-marble dominant, white type, high contrast, dark-mode first.
- Bold condensed sans display, big text, cinematic full-screen imagery.
- Scroll-driven reveals, horizontal scroll for the gallery.

Recommendation: blend — **light (white marble) sections for services/info, dark (black marble) sections for hero, transformation and booking** — mirroring the two-tone shop floor.

### Palette (draft tokens)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0E0E0E` | text, dark sections |
| `--marble-white` | `#F5F3EF` | light backgrounds |
| `--stone` | `#8A8780` | secondary text, dividers |
| `--vein` | `#2B2B2B` | dark surfaces |
| `--accent` | `#C8B48A` | CTAs, small highlights only |

## Signature detail (the "story" moment)
Marble veins as a motif: on scroll, a single black vein line draws across the white marble hero and traces into the salon's logo / monogram, then splits into a comb or scissor silhouette. Second option: before/after transformation where the "after" image is revealed by a marble-textured wipe.

## Build recommendation
- Client will likely want to edit prices/team/gallery → **Webflow** or a headless CMS + Next.js.
- If speed and full control matter more → Next.js + Tailwind, content in a simple CMS (Sanity).
- Booking: integrate the salon's existing system (Fresha/Booksy/etc.) rather than building one.

## Next steps
1. Send questionnaire → collect answers, logo, photos, reviews.
2. Approve site map.
3. Present mood boards A & B → client picks.
4. Design homepage (desktop + mobile) → prototype → approval.
5. Inner pages → development → QA → launch.
