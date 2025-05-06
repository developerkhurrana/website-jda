# Jaideo Automation Website

A modern, responsive website for Jaideo Automation India Pvt. Ltd., built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- Modern, responsive design
- Dark/light mode support
- Mobile-first approach
- Accessible components
- SEO optimized
- Fast performance

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd website-jda
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── products/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── theme-provider.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── images/
├── tailwind.config.js
└── package.json
```

## Image Placeholders

The project uses placeholder images for demonstration purposes. Replace them with your actual images in the `public/images` directory:

- scada-placeholder.jpg
- bms-placeholder.jpg
- plc-placeholder.jpg
- energy-placeholder.jpg
- analytics-placeholder.jpg
- robotics-placeholder.jpg

## Customization

1. Update the content in the respective page components
2. Modify the theme colors in `tailwind.config.js`
3. Add your own images to the `public/images` directory
4. Customize the components in `src/components/ui`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
