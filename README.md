# celo-personality

Discover your Celo personality through an interactive quiz!

A modern Celo blockchain application built with Next.js, TypeScript, and Turborepo. Take a fun personality quiz to find out if you're a Mini App Maven, Real Human Being, Regenerative Soul, L2 Architect, or Stablecoin Pragmatist.

## Features

- 🎯 **Interactive Personality Quiz**: Answer 5 questions to discover your Celo personality type
- 🎨 **Beautiful UI**: Modern, animated interface with smooth transitions
- 📱 **Farcaster Integration**: Works as a Farcaster mini app
- 🔄 **Progressive Questions**: Each question unlocks after answering the previous one
- 📊 **Results Analysis**: Get detailed personality traits and descriptions
- 🔗 **Shareable Results**: Share your personality type with others

## Personality Types

Discover which Celo personality matches you:

- 🎮 **Mini App Maven**: Mobile-first innovators who love building accessible blockchain apps
- 🌟 **Real Human Being**: Authenticity-focused builders connecting digital and physical worlds
- 🌱 **Regenerative Soul**: Impact-driven developers creating sustainable blockchain solutions
- ⚡ **L2 Architect**: Technical wizards optimizing for speed, efficiency, and scalability
- 💰 **Stablecoin Pragmatist**: Practical builders making crypto useful for everyday life

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

This is a monorepo managed by Turborepo with the following structure:

- `apps/web` - Next.js application with embedded UI components and utilities
- `apps/hardhat` - Smart contract development environment

## Available Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm type-check` - Run TypeScript type checking

### Smart Contract Scripts

- `pnpm contracts:compile` - Compile smart contracts
- `pnpm contracts:test` - Run smart contract tests
- `pnpm contracts:deploy` - Deploy contracts to local network
- `pnpm contracts:deploy:alfajores` - Deploy to Celo Alfajores testnet
- `pnpm contracts:deploy:sepolia` - Deploy to Celo Sepolia testnet
- `pnpm contracts:deploy:celo` - Deploy to Celo mainnet

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Smart Contracts**: Hardhat with Viem
- **Monorepo**: Turborepo
- **Package Manager**: PNPM

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Celo Documentation](https://docs.celo.org/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
