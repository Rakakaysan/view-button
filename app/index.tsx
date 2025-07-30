import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/constants/input-styles";

const ContactPage = () => {
  const router = useRouter(); // pakai useRouter dari expo-router

  const handleLogin = () => {
    router.push("/stack/profile"); // navigasi ke halaman "profile"
  };

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactPage;
