# SignBridge

SignBridge — Accessible live video calls with real-time translation

SignBridge is a Next.js-based user interface for an accessible video calling platform focused on improving real-time communication for people with disabilities. It provides a foundation for building low-latency video experiences with live translation and accessibility-first UI components.

## Key Features

- Accessible UI components (inputs, buttons, avatars, checkboxes)
- Real-time translation support (integration-ready for live video feeds)
- Clean, component-driven Next.js app structure
- Easy local development and production builds

## Tech Stack

- Next.js
- React
- PostCSS
- Plain JS modules for small utilities

## Quick Start

### Prerequisites

- Node.js 18 or newer
- npm, yarn, or pnpm

### Install

Install dependencies from the project root:

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

This runs the Next.js development server. Open http://localhost:3000 to view the app.

### Build (production)

```bash
npm run build
npm run start
```

## Environment

This UI is primarily static and doesn’t require secrets to run locally. If you integrate with backend services (video, translation, auth), provide those service URLs and keys in a `.env.local` file at the project root. Example:

```
# .env.local
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
VIDEO_SERVICE_KEY=your_key_here
```

## Project Structure

- `src/app/` — Next.js app routes and pages
- `src/components/` — Reusable UI components
- `src/lib/` — Small utility modules
- `public/` — Static assets (images, icons)

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository and create a feature branch
2. Make changes and run the dev server to test
3. Open a pull request with a clear description and screenshots if UI changed

Please keep changes focused and add tests or notes where helpful.

## License

This project includes a `LICENSE` file in the repository root.

## Acknowledgements & Contact

Built to improve accessibility and inclusiveness in real-time communication. For questions or collaboration, open an issue or contact the maintainers via the repository.