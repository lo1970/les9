import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { appName, placeholderPages } from "@les9/shared";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>Squelette local</Text>
      <Text style={styles.title}>{appName}</Text>
      {placeholderPages.map((page) => (
        <View key={page.id} style={styles.card}>
          <Text style={styles.cardTitle}>{page.title}</Text>
          <Text style={styles.summary}>{page.summary}</Text>
        </View>
      ))}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f4ef",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  eyebrow: {
    color: "#5c564c",
    fontSize: 12,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  title: {
    color: "#1c1915",
    fontSize: 40,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#e4dfd4",
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  cardTitle: {
    color: "#1c1915",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 6,
  },
  summary: {
    color: "#1c1915",
    fontSize: 16,
    lineHeight: 22,
  },
});
