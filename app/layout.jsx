import "./globals.css"

export const metadata = {
  title: "DigitalPro - Digital Marketing Agency",
  description: "Professional digital marketing services to help your business grow online.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'