import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Portfólio pessoal</span>
        <h1>Maria Clara Ribeiro</h1>
        <p>Estudante de Ciência da Computação, curiosa por tecnologia e criação.</p>

        <nav className={styles.actions} aria-label="Navegação principal">
          <Link className={styles.primaryAction} href="/sobre">
            Me conheça melhor
          </Link>
          <Link className={styles.secondaryAction} href="/projetos">
            Meus projetos
          </Link>
          <Link className={styles.secondaryAction} href="/forca">
            Divirta-se
          </Link>
        </nav>
      </section>
    </main>
  );
}