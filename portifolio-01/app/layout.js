import './globals.css';
import styles from './layout.module.css';
import localFont from 'next/font/local';
import Link from 'next/link';

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/Satoshi-Italic.otf', weight: '400', style: 'italic' },
    { path: './fonts/Satoshi-Medium.otf', weight: '500', style: 'normal' },
    { path: './fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' },
    { path: './fonts/Satoshi-Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata = {
  title: 'Maria Clara Ribeiro | Portfólio',
  description: 'Currículo e portfólio pessoal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={satoshi.variable}>
      <body>
        <nav className={styles.navbar}>
          <span className={styles.logo}>MC</span>
          <div className={styles.links}>
            <Link href="/">Início</Link>
            <Link href="/forca">Jogo da Forca</Link>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
