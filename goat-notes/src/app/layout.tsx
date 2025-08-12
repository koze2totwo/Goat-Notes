import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSiderbar";
import NoteProvider from "@/providers/NoteProvider";
import { Analytics } from '@vercel/analytics/next';




export const metadata: Metadata = {
  title: "Goat-notes",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>  
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <NoteProvider>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex min-h-screen w-full flex-col">
            <Header />

          <main className="flec flex-1 felx-col px-4 pt-10 xl:px-8">{children}</main>
          </div> 
          </SidebarProvider>
          
          <Toaster />
          <Analytics />

        </NoteProvider>
          </ThemeProvider>

          


   
      </body>
    </html>
  );
}
