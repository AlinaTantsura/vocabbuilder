import "./globals.css";
import localFont from "next/font/local"
import Header from "../components/Header"

export const macPaw = localFont({
  src: "./fonts/FixelDisplay-Regular.otf",
  variable: '--font-mac-paw',
  weight: "100 900",
});

export const sfPro = localFont({
  src: "./fonts/SfProDisplayRegular.otf",
  variable: '--font-sf-pro',
  display: 'swap'
})

export const metadata = {
  title: "Vocabbuilder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${macPaw.variable} ${sfPro.variable}`}>
      <head>
        <link rel="icon" href="logo.svg" sizes="any" />
      </head>
      <body className="font-macPaw">
        <Header />
        {children}
      </body>
    </html>
  );
}
