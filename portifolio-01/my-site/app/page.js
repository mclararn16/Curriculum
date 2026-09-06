import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* Seção Hero */}
      <section className={styles.hero}>
        <h1>Quem sou eu ?</h1>
        <p>Meu nome é Clara sou estudante de Ciência da Computação, gosto muito da área de desenvolvimento e por isso criei esse site para servir de portifólio para os meus trabalhos acadêmicos e pessoais!</p>
      </section>

      {/* Seção Formação Acadêmica */}
<section className={styles.section}>
  <h2>Formação Acadêmica</h2>

  <div className={styles.academicItem}>
    <Image
      src="/imagens/foto-escola.jpeg"
      alt="Colégio Eximius-2022"
      width={145}
      height={200}

      className={styles.academicImage}
    />
    <p>
      Me formei no colégio Eximius em 2022 e ingressei na Universidade
      Católica de Pernambuco em 2024, onde estou finalizando minha graduação.
    </p>
  </div>

 
      </section>

     

      {/* Seção Atividades Extracurriculares */}
      <section className={styles.section}>
        <h2>Atividades Extracurriculares</h2>
        {<p>Participei como mentorada no projeto SWITAB no ano de 2025 e no ano de 2026 participei novamente, agora como mentora. Esse projeto me proporcionou muitas vivências incriveis, pude ter um contato mais direto com empresas e o mercado profissional.</p>}
      </section>

      {/* Seção Galeria de Projetos */}
      <section className={styles.section}>
        <h2>Projetos</h2>
        {<p>Entre os meus projetos acadêmicos, o projeot que mais me marcou foi o desenvolvimento de um aplicativo de entrega de doces e</p>}
      </section>

    </div>
  );
}