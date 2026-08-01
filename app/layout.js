import '@/styles/globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export const metadata = {
  metadataBase: new URL('https://thodz.com'),
  title: {
    default: 'THODZ SOLUTIONS: Full-stack engineering studio',
    template: '%s · THODZ SOLUTIONS',
  },
  description: 'THODZ SOLUTIONS designs, builds, and operates web, mobile, desktop, and infrastructure systems for teams who need it done right the first time.',
  openGraph: {
    title: 'THODZ SOLUTIONS: Full-stack engineering studio',
    description: 'One technical partner. Every system you need.',
    url: 'https://thodz.com',
    siteName: 'THODZ SOLUTIONS',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
