import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "@/constants/input-styles";
import ThemedButton from "@/components/ThemedButton"; // ✅ tanpa spasi

const ContactPage = () => {
  const router = useRouter(); // pakai useRouter dari expo-router

  const handleLogin = () => {
    router.push("/stack/profile"); // navigasi ke halaman "profile.js"
  };

  return (
    <View style={styles.container}>
      <Text>Settings Pag</Text>
      <ThemedButton title="Go to Profile" onPress={handleLogin} />
    </View>
  );
};

export default ContactPage;
