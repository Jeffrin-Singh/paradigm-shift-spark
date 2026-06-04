## Add "Contractors Hub" to Contractors dropdown

### Files to modify
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`

### Changes

**1. `src/components/layout/Navbar.tsx`**
- Add `{ name: "Contractors Hub", path: "https://PLACEHOLDER-THIRDPARTY-SITE.com" }` to the `contractors` array with a comment: `// Replace with actual third-party URL`.
- Update the desktop dropdown to render external links (starting with `http`) as `<a target="_blank" rel="noopener noreferrer">` instead of `<Link>`.
- Update the mobile accordion rendering the same way.

**2. `src/components/layout/Footer.tsx`**
- Add the same Contractors Hub entry to the `contractors` array with the same placeholder URL and comment.
- Update the footer column rendering to use `<a>` for absolute URLs (external links) and `<Link>` for internal paths.

### Technical detail
Both the desktop dropdown and mobile accordion iterate the `contractors` array. Each item's rendering will check if `path.startsWith("http")` to decide between `<a>` (external, new tab) and `<Link>` (internal).