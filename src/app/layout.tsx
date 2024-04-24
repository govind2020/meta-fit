'use client';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogIn from '@/components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/scss/theme.scss';
import CreateAccount from '@/components/CreateAccount';
import ForgetPassword from '@/components/ForgetPassword';
import Otp from '@/components/Otp';
import NewPassword from '@/components/NewPassword';
import Script from 'next/script';

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={manrope.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LogIn />
        <CreateAccount />
        <ForgetPassword />
        <Otp />
        <NewPassword />
      </body>
    </html>
  );
}
