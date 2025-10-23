# VidCraft: AI-Powered Video Creation Platform

Welcome to **VidCraft** - an advanced AI-driven solution designed to help developers, creators, and marketers produce professional, platform-optimized video content. Whether you’re building a portfolio, managing client work, or showcasing your development capabilities, VidCraft provides the complete toolkit you need for modern video production.

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

- **AI Video Optimization**: Smart compression and enhancement powered by machine learning
- **Cross Platform Optimization**: Automatically format videos for YouTube, Instagram, TikTok, X, and more
- **Smart Compression**: Reduce file size without compromising visual quality
- **Automatic Subtitles**: AI-generated captions for accessibility and engagement
- **Thumbnail Generator**: Create customized thumbnails automatically
- **Performance Insights**: Real-time analytics and engagement tracking
- **User Authentication**: Secure and reliable login powered by Clerk
- **Modern Interface**: Responsive, clean UI built using TailwindCSS and DaisyUI

## Getting Started

Follow the instructions below to set up VidCraft on your local environment.

### Prerequisites

- Node.js (version 18 or later)
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

3. Create an environment file named `.env.local` in the root directory:

   ```plaintext
   # Database
   DATABASE_URL="postgresql_connection_string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_publishable_key
   CLERK_SECRET_KEY=clerk_secret_key
   
   # Optional: Media processing
   CLOUDINARY_URL=cloudinary_url
   ```

5. Set up the database:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

Your application will now be running at `http://localhost:3000`.

## Usage

### Dashboard
Access your main dashboard at `/home` to view projects, analytics, and video performance data.

### Video Upload
Navigate to `/video-upload` to:
- Upload supported video formats (MP4, MOV, AVI, WebM)
- Apply AI compression and optimization
- Generate thumbnails and subtitles
- Export videos for multiple social platforms

### Social Sharing
Open `/social-share` to:
- Select your target platforms
- Preview formatted versions
- Schedule or publish your content

## Technologies Used

VidCraft is built using a modern web technology stack for performance and scalability:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: PostgreSQL managed with Prisma ORM
- **Authentication**: Clerk
- **Styling**: TailwindCSS + DaisyUI
- **Video Processing**: AI-powered video compression and optimization
- **Deployment**: Fully optimized for Vercel

## Project Structure

```
vidcraft/
├── app/                    # Next.js App Router
│   ├── (app)/              # Protected routes
│   │   ├── home/           # Dashboard page
│   │   ├── video-upload/   # Upload and processing page
│   │   └── social-share/   # Social media integration
│   ├── (auth)/             # Authentication pages
│   ├── api/                # API routes
│   └── layout.tsx          # Root layout
├── prisma/                 # Database schema and migrations
├── components/             # Reusable UI components
├── lib/                    # Utility and helper functions
└── public/                 # Static assets
```

## Contributing

We welcome all contributions to improve VidCraft! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your updates and test them thoroughly
4. Commit your changes: `git commit -m 'Add: your feature description'`
5. Push to your branch: `git push origin feature/your-feature-name`
6. Submit a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write clear and descriptive commit messages
- Ensure designs are responsive and accessible
- Test thoroughly before submitting a PR
- Keep documentation up to date

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Roadmap

- Advanced AI editing features
- Batch video processing
- API for third-party integrations
- Mobile application support
- Expanded analytics dashboard
- Team collaboration tools

---

**VidCraft** - Redefining modern video content creation.

For feedback, questions, or bug reports, please open an issue in this repository.
