// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'skyblue',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    center: {
        flexDirection: 'row',
        width: '100%',  
        justifyContent: 'space-between', 
        alignItems: 'center',  
        padding: 10, // Increased padding for better spacing
    },
    navbarlink: {
        color: 'blue',
        fontWeight: 'bold', 
        fontSize: 16,  
        textDecorationLine: 'underline', 
        marginLeft: 10, 
    },
    link: {
        color: 'blue',
        fontWeight: 'bold', 
        fontSize: 16, 
        textDecorationLine: 'underline', 
    },
    welcomeText: { 
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50, 
        color: '#333', 
    },
    title: {
        fontWeight: 'bold',
        color: '#333'
    },
    description: {
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 30,
    }
});

