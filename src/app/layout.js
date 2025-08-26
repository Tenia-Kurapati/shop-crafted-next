import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EliteStore - Premium Products & Exceptional Quality',
  description: 'Discover premium products at EliteStore. From cutting-edge electronics to luxury fashion, we curate the finest selection for discerning customers. Free shipping over $50.',
  author: 'Lovable',
  openGraph: {
    title: 'EliteStore - Premium Products & Exceptional Quality',
    description: 'Discover premium products at EliteStore. From cutting-edge electronics to luxury fashion, we curate the finest selection for discerning customers.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}