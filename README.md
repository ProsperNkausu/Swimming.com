# SwimHub-Academy-Website-Booking-System

SwimHub-Academy-Website-Booking-System is a modern static website for a Lusaka-based swimming academy. It presents the academy's purpose, lesson programs, tour video, pricing plans, and booking contact path for children, adults, schools, and organizations.

## Project Structure

```text
Swimming.com/
├── index.html        # Main single-page website
├── css/
│   └── style.css     # Responsive layout, theme colors, and component styles
├── js/
│   └── app.js        # Mobile navigation, dynamic year, and booking mail links
├── img/              # Logo, hero, background, and swimming imagery
└── README.md
```

## Features

- Responsive one-page academy website
- Sticky navigation with mobile menu support
- Hero section, about section, programs, embedded tour video, pricing, and booking CTA
- Pricing buttons that open a pre-filled email booking request
- Dynamic copyright year
- Original blue, white, and light gray color palette retained

## Run Locally

This is a static HTML/CSS/JavaScript project. Open `index.html` directly in a browser, or serve the folder with any static server.

Example with Python:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Customization

- Update page content in `index.html`
- Adjust layout, spacing, and colors in `css/style.css`
- Update interactive behavior in `js/app.js`
- Replace or optimize image assets inside `img/`

## Notes

The current booking flow uses `mailto:support@SwimHub.com`. Replace this address in `index.html` and `js/app.js` when the academy has a final production contact email.
