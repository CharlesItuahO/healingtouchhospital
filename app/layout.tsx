import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Healing Touch Hospital | Best Healthcare in Lagos',
  description: 'Healing Touch Hospital is a secondary care hospital dedicated to providing quality and affordable healthcare services in Oshodi-Isolo, Lagos.',
  keywords: 'hospital in Oshodi-Isolo, best hospital in Lagos, healthcare in Lagos, Healing Touch Hospital',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
