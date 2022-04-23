import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
    return (
        <View style={styles.screen}>

            <Title>Opponent's Guess</Title>

            <View>
                <Text>Higher or lower?</Text>

            </View>
            <View>
            </View>
        </View>)
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
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