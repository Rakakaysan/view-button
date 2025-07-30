import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Settings, Mail, Phone, Twitter, Globe, Facebook } from 'lucide-react-native';

const ProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header Section with Blue Background */}
      <View style={styles.header}>
        {/* Navigation */}
        <View style={styles.navigation}>
            <View style={styles.navButton} />
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.navButton}>
            <Settings size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Raka Kaysan Nawfal</Text>
          <Text style={styles.role}>Junior Graphic Designer</Text>
          
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1290</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>400</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.contactSection}>
        <View style={styles.contactItem}>
          <View style={styles.iconContainer}>
            <Mail size={20} color="#6B7280" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>rakakaysan08@gmail.com</Text>
          </View>
        </View>

        <View style={styles.contactItem}>
          <View style={styles.iconContainer}>
            <Phone size={20} color="#6B7280" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Mobile</Text>
            <Text style={styles.contactValue}>085714336458</Text>
          </View>
        </View>

        <View style={styles.contactItem}>
          <View style={styles.iconContainer}>
            <Twitter size={20} color="#6B7280" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Twitter</Text>
            <Text style={styles.contactValue}>@james2012</Text>
          </View>
        </View>


        <View style={styles.contactItem}>
          <View style={styles.iconContainer}>
            <Facebook size={20} color="#6B7280" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Facebook</Text>
            <Text style={styles.contactValue}>www.facebook.com/james2012</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  header: {
    backgroundColor: '#e95f09ff',
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  navButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  profileInfo: {
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: 'rgba(37, 35, 35, 0.8)',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 40,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  contactSection: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 12,
    paddingVertical: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000000ff',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#f9fafb',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '500',
  },
});

export default ProfilePage;