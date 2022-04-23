import {StyleSheet, Text} from "react-native";

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;


const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5a0808',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#5a0808',
        padding: 12
    }
})