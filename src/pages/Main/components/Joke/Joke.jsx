import {Text, View} from "react-native";
import {styles} from './joke.styles'

export const Joke = ({textValue}) => {
    return (
        <View style={styles.joke}>
            <Text>{textValue}</Text>
        </View>
    )
}