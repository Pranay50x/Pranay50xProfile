'use client';

import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Squares from '@/components/Squares/Squares';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lightThemeColors = {
    borderColor: 'rgba(249, 115, 22, 0.12)',
    hoverFillColor: 'rgba(249, 115, 22, 0.06)',
    gradientColor: 'rgba(255, 255, 255, 0.1)',
  };

  const darkThemeColors = {
    borderColor: 'rgba(34, 197, 94, 0.12)',
    hoverFillColor: 'rgba(34, 197, 94, 0.06)',
    gradientColor: '#060010',
  };

  const [colors, setColors] = useState(darkThemeColors);

  useEffect(() => {
    if (mounted) {
      setColors(theme === 'dark' ? darkThemeColors : lightThemeColors);
    }
  }, [theme, mounted]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Tags */}
        <title>Pranay - Portfolio</title>
        <meta name="description" content="Explore the portfolio of Pranay, showcasing expertise and projects." />
        <meta name="keywords" content="Portfolio, Pranay,Pranay50X, Web Developer, Projects, Frontend Developer, Fullstack Developer" />
        <meta name="author" content="Pranay50X" />
        <meta property="og:title" content="Pranay - Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Pranay, showcasing expertise and projects." />
        <meta property="og:url" content="https://pranay50x.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pranay - Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Pranay, showcasing expertise and projects." />
        <meta name="twitter:image" content="https://yourdomain.com/preview.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pranay",
              "url": "https://pranay50x.vercel.app/",
              "description": "Explore the portfolio of Pranay, showcasing expertise and projects.",
              "sameAs": [
                "https://github.com/Pranay50x",
                "https://www.linkedin.com/in/pranay-kr-651a3b284/"
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor/>
          <div className="background-canvas">
            {mounted && (
              <Squares
                speed={0.3}
                squareSize={40}
                direction='diagonal'
                borderColor={colors.borderColor}
                hoverFillColor={colors.hoverFillColor}
                gradientColor={colors.gradientColor}
              />
            )}
          </div>
          <div className="content-container flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}