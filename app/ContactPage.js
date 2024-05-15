import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../assets/css';

export default function ContactPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>
            <Link push href="/HomePage" style={styles.link}>Go back to Home Page</Link>
        </View>
    );
}