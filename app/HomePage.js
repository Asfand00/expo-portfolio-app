// HomePage.js

import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../assets/css';

export default function HomePage() {
    return (
        <View style={styles.container}> 
            <Image source={require('../assets/images/me.jpg')} style={styles.image}></Image>
            
            <Text style={styles.welcomeText}>Welcome to my Home Page!</Text> 
            
            <View style={styles.center}>
                <Text style={styles.title}>Nav Bar:</Text>
                <Link href="/ContactPage" asChild>
                    <Text style={styles.navbarlink}>Contact Page</Text>
                </Link>
                <Link href="/SkillsPage" asChild>
                    <Text style={styles.navbarlink}>Skills Page</Text> 
                </Link>
            <View style={styles.container}>
                <Text style={styles.title}>Projects:</Text>
                <Link href="/ProjectsPage/1" asChild>
                    <Text style={styles.link}>Project 1</Text>
                </Link>
                <Link href="/ProjectsPage/2" asChild>
                    <Text style={styles.link}>Project 2</Text>
                </Link>
                <Link href="/ProjectsPage/3" asChild>
                    <Text style={styles.link}>Project 3</Text>
                </Link>
            </View>
            </View>
        </View>
    );
}


