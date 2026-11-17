import { Link, type Href } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../../assets/theme";

type BotaoProps = {
  href: string;
  label: string;
  primary?: boolean;
};

function Botao({ href, label, primary = false }: BotaoProps) {
  return (
    <Link href={href as Href} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.botao,
          primary ? styles.botaoPrimario : styles.botaoSecundario,
          pressed &&
            (primary ? styles.primarioPressionado : styles.secundarioPressionado),
        ]}
      >
        {({ pressed }) => (
          <Text
            style={[
              styles.botaoTexto,
              { color: primary || pressed ? colors.lace : colors.blue },
            ]}
          >
            {label}
          </Text>
        )}
      </Pressable>
    </Link>
  );
}

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>Portfólio pessoal</Text>

        <Text style={styles.titulo}>Maria Clara Ribeiro</Text>

        <Text style={styles.descricao}>
          Estudante de Ciência da Computação, curiosa por tecnologia e criação.
        </Text>

        <View style={styles.acoes}>
          <Botao href="/sobre" label="Me conheça melhor"  />
          <Botao href="/projetos" label="Meus projetos" />
          <Botao href="/forca" label="Divirta-se" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    alignItems: "center",
    padding: 24,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 12,
    backgroundColor: colors.card,
    // sombra no iOS
    shadowColor: colors.blue,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    // sombra no Android
    elevation: 6,
  },
  eyebrow: {
    color: colors.red,
    fontFamily: fonts.bold,
    fontSize: 13,
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
  titulo: {
    marginTop: 14,
    marginBottom: 12,
    color: colors.blue,
    fontFamily: fonts.black,
    fontSize: 40,
    lineHeight: 42,
    letterSpacing: -0.8,
    textAlign: "center",
  },
  descricao: {
    color: colors.textSoft,
    fontFamily: fonts.regular,
    fontSize: 17,
    lineHeight: 29,
    textAlign: "center",
  },
  acoes: {
    width: "100%",
    gap: 12,
    marginTop: 36,
  },
  botao: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 22,
    borderWidth: 2,
    borderRadius: 999,
    borderColor: colors.blue,
  },
  botaoPrimario: {
    borderColor: colors.red,
    backgroundColor: colors.red,
  },
  botaoSecundario: {
    borderColor: colors.blue,
    backgroundColor: "transparent",
  },
  primarioPressionado: {
    opacity: 0.85,
    transform: [{ translateY: -3 }],
  },
  secundarioPressionado: {
    backgroundColor: colors.blue,
    transform: [{ translateY: -3 }],
  },
  botaoTexto: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
});