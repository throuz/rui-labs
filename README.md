## Rui Labs — landing page (Lemon Squeezy review friendly)

This is a simple landing site for **Rui Labs**, structured to match common Lemon Squeezy review
expectations:

- Clear description of what you sell
- Visible **support email**
- Dedicated policy pages: **Privacy**, **Terms**, **Refund**

### Dev

```bash
pnpm dev
```

### Build

```bash
pnpm build
pnpm preview
```

### Policy pages

These are plain static HTML files (direct URLs), located in `public/`:

- `public/privacy.html`
- `public/terms.html`
- `public/refund.html`

To change the support email, update `src/App.tsx` and the policy HTML files.
