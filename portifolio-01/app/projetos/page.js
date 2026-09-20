import Image from 'next/image';
import styles from '../page.module.css';

export default function Projetos() {
  return (
    <main className={styles.contentPage}>
      <span className={styles.eyebrow}>Portfólio</span>
      <h1>Meus projetos</h1>
      <section className={styles.detailSection}>
        <div>
        <h2>Aplicativo de entrega de doces</h2>
        <Image src="/imagens/Switly-entrada.jpeg" alt="Switly" width={200} height={433} className={styles.switlyImage} />
        <p>
Desenvolvi este projeto em uma disciplina focada em gestão de projetos de software, aplicando a metodologia ágil Scrum do início ao fim do processo. O objetivo era criar uma aplicação web para gerenciamento de pedidos em docerias. Embora a implementação técnica não tenha sido finalizada 100%, todo o ciclo de gestão do projeto — planejamento, sprints, cerimônias ágeis e entregas incrementais — foi concluído com sucesso, o que trouxe um aprendizado sólido sobre como conduzir um projeto de software na prática.</p>
<h2>Sistema para Empresa de Móveis Planejados</h2>
        <p>Este é meu projeto mais recente, desenvolvido em grupo e atualmente em fase inicial. Trata-se de uma aplicação web voltada para uma empresa de móveis planejados, com o front-end sendo construído em React. É um projeto que está me permitindo aplicar na prática o trabalho em equipe e colaboração em código, além de aprofundar meus conhecimentos em React.
        </p>
        <h2>Portfólio Pessoal</h2>
        <p>Este site que você está navegando agora também é um dos meus projetos! Desenvolvido com React no front-end e Node.js no back-end, foi uma experiência muito interessante de unir design, organização de conteúdo e programação para criar uma vitrine dos meus trabalhos e experiências.</p>
        <h2>Jogo dos Dados</h2>
        <Image src="/imagens/jogoDado.jpeg" alt="Projeto SWITAB" width={900} height={500} className={styles.projectImage} />
        <p>O jogo dos dados foi um projeto muito interessante que criei para a cadeira de Web-Mobile da faculdade, um projeto criado em REACT utilizando Node.js e foi muito interessante aprender coisas novas atavés de pesquisas para o design do site.</p>
        </div>
      </section>
    </main>
  );
}