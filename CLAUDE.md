# Claude Instructions

必ず日本語で回答してください。
This is an Astro-based personal portfolio website.

## Project Setup

- **Framework**: Astro v5
- **Package Manager**: Yarn 4.5.1 (required)
- **Node Version**: 20.18.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: Enabled

## Development Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn astro-check` - Run Astro type checking
- `yarn type-check` - Run TypeScript type checking
- `yarn format` - Format code with Prettier

## Code Quality

- **Linting**: ESLint with Astro plugin, JSX a11y, and TypeScript ESLint
- **Formatting**: Prettier with Astro plugin
- **Pre-commit**: Lefthook for Git hooks
- **Type Checking**: TypeScript strict mode

## Project Structure

- `/src/components/` - Reusable Astro components
- `/src/features/` - Feature-specific components organized by domain
- `/src/pages/` - Astro pages (file-based routing)
- `/src/styles/` - Global CSS styles
- `/src/constants/` - Constants and configuration
- `/public/` - Static assets

## Important Notes

- Always run `yarn lint` and `yarn type-check` after making changes
- Follow existing code patterns and naming conventions
- Use Astro components (.astro) for UI components
- Tailwind CSS classes are preferred for styling
- Images are stored in `/src/assets/` and `/public/`
