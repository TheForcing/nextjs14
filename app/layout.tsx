import { Metadata } from "next"
import "../app/styles/global.css";import navigation from "../components/navigation";
import Navigation from "../components/navigation";

export const metadata:Metadata = {
  title: {
    template : "$s | Next Js",
    default: "Loading"
  } ,
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
