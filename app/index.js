import HomePage from "./HomePage";
import { View} from 'react-native';
import { styles } from '../assets/css';

export default function Index() {
    return (
        <View style={styles.container}>
            <HomePage></HomePage>
        </View>
    );
}