import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import { styles } from '../../assets/css';

export default function ProjectsPage() {
    const route = useRoute();
    console.log(route.params);
    const { id } = route.params;

    let projectDetails;

    // Define different project details based on the project ID
    if (id === '1') {
        projectDetails = {
            name: 'Project 1',
            description: 'This is the first project description.',
        };
    } else if (id === '2') {
        projectDetails = {
            name: 'Project 2',
            description: 'This is the second project description.',
        };
    } else {
        // Default project details
        projectDetails = {
            name: 'Project 3',
            description: 'This is the third project description.',
        };
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects Page {id}</Text>
            <Link replace href="/HomePage" style={styles.link}>Go back home</Link>
            <Text style={styles.description}>
                {'\n'}{projectDetails.name}{'\n'} 
                Description: {projectDetails.description}
            </Text>
            
        </View>
    );
}
