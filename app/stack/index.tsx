import { useRouter } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ContactPage = () => {
  const router = useRouter(); // pakai useRouter dari expo-router

  const handleLogin = () => {
    router.push("/stack/profile"); // navigasi ke halaman "profile.js"
  };

  return (
    <View style={styles.container}>
      <Text>Halaman Contact</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default ContactPage;
