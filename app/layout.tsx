import UserProvider from './context/user'
import AllOverlays from "@/app/components/AllOverlays"
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yaddai',
  description: 'Yaddai is an experimental AI-generated video platform, designed as a safe and creative space where users can explore, upload, and share audiovisual content made with tools like Runway, Sora, Pika, or Veo. Join our ethical community that celebrates visual innovation and emerging digital art.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>


        <body>
          <AllOverlays />
          {children}
        </body>

      </UserProvider>
    </html>
  )
}
