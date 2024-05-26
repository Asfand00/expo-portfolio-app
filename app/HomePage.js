import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from '../assets/css';
import { Link } from 'expo-router';

export default function HomePage() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImagePickerAsync = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false, // Set allowsEditing to false
        });

        console.log("Picker Result: ", pickerResult); // Log the complete result

        if (!pickerResult.cancelled && pickerResult.assets) {
            setSelectedImage(pickerResult.assets[0].uri);
            console.log("Selected Image URI: ", pickerResult.assets[0].uri); // Log the selected image URI
        } else {
            console.log("Picker was cancelled or no assets were selected.");
        }
    };

    return (
        <View style={styles.container}>
            {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.image} />
            ) : (
                <Image source={require('../assets/images/me.jpg')} style={styles.image} />
            )}

            <TouchableOpacity style={styles.buttonContainer} onPress={openImagePickerAsync}>
                <Text style={styles.buttonText}>Pick a profile photo</Text>
            </TouchableOpacity>

            <Text style={styles.welcomeText}>Welcome to my Home Page!</Text>

            <View style={styles.center}>
                <Text style={styles.title}>Nav Bar:</Text>
                <Link href="/ContactPage" asChild>
                    <Text style={styles.navbarlink}>Contact Page</Text>
                </Link>
                <Link href="/SkillsPage" asChild>
                    <Text style={styles.navbarlink}>Skills Page</Text>
                </Link>
            </View>

            <View style={styles.center}>
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
    );
}

