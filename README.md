# ABN Textiles India Pvt Ltd — website

Static site. No build step, no dependencies — open `index.html` in a browser, or serve
the folder over HTTP (needed if you want the Google Map to load reliably).

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## Structure

```
index.html          home page (the only page so far)
css/style.css       all styles, organised in 15 numbered sections
js/main.js          sticky header, mobile menu, scroll reveal, footer year
images/             web-optimised photos used by the site
images/gallery/     the Displays & mock-ups photos
logo 2.png          original logo supplied by ABN (source file, unused by the site)
```

The original photo folders (`PREMIUM CURTAINS`, `CLASSIC JACQUARD`, etc.) are left
untouched. Everything in `images/` is a resized copy — originals were 2–4 MB each.

## Locations

All three branches are live in `index.html` under `#contact`, each with its own
Google Map embed and a Get Directions link:

| Branch | Role | Contact |
|---|---|---|
| Tri Nagar, New Delhi | Head Office | Sohban — +91 99902 42015 |
| Kirti Nagar, New Delhi | Showroom | Gaurav Sharma — +91 98100 82381 |
| Panipat, Haryana | Mill & Manufacturing | Jagdish Sharma — +91 98100 70424 |

## Placeholders still to fill

Anything wrapped in `[SQUARE BRACKETS]` is still dummy content:

- **Opening hours** — all three branches currently read `[Mon – Sat · 10:00 – 19:00]`
- **CIN / GSTIN** — in the footer

Branch roles (Head Office / Showroom / Mill) were inferred from the addresses —
correct the `.tag` line on any card if a branch is labelled wrongly.

## Theme

Colours are CSS custom properties at the top of `css/style.css`. Changing the palette
means editing those tokens only — nothing else hardcodes a colour.

| Token | Value | Used for |
|---|---|---|
| `--base` | `#FBFAF7` | page background |
| `--base-alt` | `#F1EFE9` | gallery / alt sections |
| `--deep` | `#1E3B32` | green bands (USP, jacquard, enquiry) |
| `--deep-2` | `#162C25` | footer |
| `--gold` | `#B8912F` | accent, links, buttons |
| `--text` | `#16211D` | body copy |

The logo is a pale monogram, so two recoloured copies are generated from it:
`logo-dark.png` (green, for light backgrounds) and `logo-light.png` (ivory, for the
footer). Regenerate them from `logo 2.png` if the brand colour changes.

## Adding gallery photos

The gallery is a CSS masonry (`column-count`), so each photo keeps its own aspect
ratio and is never cropped. To add one, drop the file in `images/gallery/` and copy a
block in `index.html`:

```html
<figure class="g-item">
  <div class="shot"><img src="images/gallery/your-photo.jpg" alt="..." loading="lazy"></div>
  <figcaption>Caption</figcaption>
</figure>
```

## Adding pages later

`css/style.css` and `js/main.js` are shared, so a new page just needs the same
`<head>` links, the `<header>` block and the `<footer>` block copied across.
