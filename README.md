# VidCraft: AI-Powered Video Content Creation Platform 🎬

![VidCraft Logo](https://via.placeholder.com/150/6366f1/ffffff?text=VidCraft)

Welcome to **VidCraft** – a modern AI-powered platform designed to help creators, developers, and marketers generate stunning, platform-optimized video content. Whether you're building your portfolio, creating content for clients, or showcasing your development skills, VidCraft provides the professional tools you need.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **AI-Powered Video Processing**: Intelligent video compression and optimization algorithms
- **Multi-Platform Optimization**: Generate content tailored for YouTube, Instagram, TikTok, Twitter, and more
- **Smart Compression**: Reduce file sizes while maintaining quality
- **Auto-Generated Subtitles**: AI-powered subtitle generation for accessibility
- **Thumbnail Creation**: Automatic thumbnail generation with customization options
- **Real-Time Analytics**: Track content performance and engagement metrics
- **User Authentication**: Secure authentication powered by Clerk
- **Modern UI/UX**: Built with TailwindCSS and DaisyUI for a clean, responsive design

## Getting Started

Follow these steps to set up VidCraft on your local development environment:

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)
- PostgreSQL database (NeonDB recommended)
- Clerk account for authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/vidcraft.git
   cd vidcraft
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables. Create a `.env.local` file in the root directory:

   ```plaintext
   # Database
   DATABASE_URL="your_postgresql_connection_string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Optional: Media processing
   CLOUDINARY_URL=your_cloudinary_url
   ```

4. Set up the database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

Your application will be running at `http://localhost:3000`.

## Usage

### Dashboard
Access the main dashboard at `/home` to view your projects and analytics.

### Video Upload
Navigate to `/video-upload` to:
- Upload videos in various formats (MP4, MOV, AVI, WebM)
- Apply AI-powered compression
- Generate thumbnails and subtitles
- Optimize for different platforms

### Social Sharing
Use `/social-share` to:
- Select target platforms
- Preview platform-specific formats
- Schedule and publish content

## Technologies Used

VidCraft is built with modern web technologies:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk for secure user management
- **Styling**: TailwindCSS + DaisyUI component library
- **Video Processing**: AI-powered compression algorithms
- **Deployment**: Optimized for Vercel deployment

## Project Structure

```
vidcraft/
├── app/                    # Next.js App Router
│   ├── (app)/             # Protected app routes
│   │   ├── home/          # Dashboard page
│   │   ├── video-upload/  # Upload functionality
│   │   └── social-share/  # Social media sharing
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── prisma/                # Database schema and migrations
├── components/            # Reusable UI components (to be added)
├── lib/                   # Utility functions (to be added)
└── public/               # Static assets
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Ensure responsive design works across all devices
- Test your changes before submitting
- Update documentation as needed

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Roadmap

- Advanced AI video editing features
- Batch processing capabilities
- API for third-party integrations
- Mobile app development
- Advanced analytics dashboard
- Collaboration features

---

**VidCraft** - Crafting the future of video content creation.

For questions, suggestions, or support, please open an issue in this repository.