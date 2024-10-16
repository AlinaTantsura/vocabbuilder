import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const macPaw = localFont({
  src: './fonts/FixelDisplay-Regular.otf',
  variable: '--font-mac-paw',
  // weight: "100 900",
  display: 'swap',
});

export const sfPro = localFont({
  src: './fonts/SfProDisplayRegular.otf',
  variable: '--font-sf-pro',
  display: 'swap',
});

export const metadata = {
  title: 'Vocabbuilder',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${macPaw.variable} ${sfPro.variable}`}>
      <head>
        <link rel="icon" href="logo.svg" sizes="any" />
      </head>
      <body className="font-macPaw h-[100vh] max-w-[375px] md:max-w-[768px] desk:max-w-[1440px] mx-auto flex flex-col">
          <Header />
          <main className="grow-[1] flex justify-center items-center bg-white-secondary">
            {children}
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
