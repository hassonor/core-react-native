import {StyleSheet, Text} from "react-native";
import Colors from "../constants/colors";

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;


const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent600,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent600,
        padding: 12
    }
})