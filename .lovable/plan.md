## What I'll change

### 1. Update contact details everywhere
Replace the placeholder `+65 8888 8888` / `hello@handymansg.com` with your real info:

- **WhatsApp / Call:** `+65 8312 2991` (`wa.me/6583122991`, `tel:+6583122991`)
- **Email:** `mim.gim.mg@gmail.com`

Files touched:
- `src/components/site/Header.tsx` — Call Now button
- `src/components/site/Footer.tsx` — phone + email
- `src/components/site/WhatsAppButton.tsx` — floating button link
- `src/routes/index.tsx` — hero CTAs + contact section
- `src/routes/contact.tsx` — call card, WhatsApp card, email card

### 2. Convert the hero image into an auto-playing slider
Replace the single `heroImg` in `src/routes/index.tsx` with a slideshow component:

- New file `src/components/site/HeroSlider.tsx` — cross-fade slideshow, auto-advance every 4s, pause on hover, small dot indicators, prev/next arrows on hover, lazy-loaded images, keeps the existing rounded corners / blue glow styling
- Images stored in `src/assets/works/` (e.g. `work-1.jpg`, `work-2.jpg`, …) and imported into a typed array the slider maps over
- Fully responsive, works on the 458px mobile viewport you're currently previewing
- Accessible: `aria-label`, keyboard arrow support, `prefers-reduced-motion` disables auto-advance

### 3. Adding more work photos later
Once the slider exists, adding a new photo is a 2-step request:
1. You drop the image into chat
2. I save it to `src/assets/works/` and add one line to the slider's image array

## What I need from you before building

**Please upload your work photos in your next message** (drop them into the chat — up to 10 at a time, JPG/PNG, under 20 MB each). I'll:
- Save them into `src/assets/works/` with clean filenames
- Wire them into the new `HeroSlider` in the order you upload them
- Apply the contact info updates in the same pass

If you'd rather ship the contact-info update right now and add the slider once photos are ready, say "do contact first" and I'll split it into two steps.
