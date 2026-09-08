import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Maria Clara Ribeiro | Portfólio',
  description: 'Currículo e portfólio pessoal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
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