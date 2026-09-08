import Image from 'next/image';
import styles from '../page.module.css';

export default function Sobre() {
  return (
    <main className={styles.contentPage}>
      <span className={styles.eyebrow}>Sobre mim</span>
      <h1>Me conheça melhor</h1>
      <p>Sou estudante de Ciência da Computação e gosto de transformar ideias em experiências digitais.</p>
      <section className={styles.detailSection}>
        <Image src="/imagens/foto-escola.jpeg" alt="Colégio Eximius" width={145} height={200} className={styles.academicImage} />
        <div>
          <h2>Formação acadêmica</h2>
          <p>Me formei no Colégio Eximius em 2022 e ingressei na Universidade Católica de Pernambuco em 2024, onde estou finalizando minha graduação.</p>
          <h2>Atividades extracurriculares</h2>
          <p>Ao longo da minha trajetória acadêmica, busquei ir além da sala de aula participando de atividades extracurriculares que me aproximaram do ambiente profissional. <p>No segundo período, tive a oportunidade de participar da mentoria da Avanade, que foi meu primeiro contato mais próximo com esse universo e um ótimo ponto de partida para entender como funciona o dia a dia na área de tecnologia.</p>
<p>Outra experiência que marcou muito minha formação foi minha participação no projeto SWITAB. No ano passado, entrei como mentorada e, este ano, já atuo como mentora — uma evolução que mostra o quanto cresci dentro do projeto. Foi por meio do SWITAB que tive a chance de fazer uma mentoria com a Liferay, que funcionou praticamente como um treinamento intensivo e me proporcionou uma bagagem de aprendizado incrível, unindo teoria e prática de um jeito que a faculdade sozinha não conseguiria oferecer.</p>
Essas vivências foram essenciais para meu desenvolvimento profissional, me dando uma visão real do mercado de tecnologia e reforçando minha vontade de continuar aprendendo e evoluindo na área.</p>
        </div>
      </section>
    </main>
  );
}