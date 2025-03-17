import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bhavya Kandhari",
  description: "Personal portfolio of Bhavya Kandhari, Software Developer and Data Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress console errors in production
              if (window.location.hostname !== 'localhost') {
                window.addEventListener('error', function(event) {
                  // Prevent errors from specific sources like missing images or scripts
                  if (event.target && (
                    event.target.tagName === 'IMG' || 
                    event.target.tagName === 'SCRIPT' ||
                    event.target.tagName === 'LINK'
                  )) {
                    event.preventDefault();
                    return false;
                  }
                }, true);
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} dark bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}