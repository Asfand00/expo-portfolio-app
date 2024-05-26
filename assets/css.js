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
        padding: 10,
    },
    navbarlink: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
        textDecorationLine: 'underline',
        
    },
    link: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        color: '#333',
    },
    title: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 18,
        
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 30,
        borderRadius: 50, // makes the image circular
    },
    buttonContainer: {
        backgroundColor: '#007BFF', // Blue background
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 18,
        color: 'white', // White text
        textAlign: 'center',
    },
    description: {
        fontWeight: 'bold'
    }
});
