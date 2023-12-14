import {Text, View} from 'react-native';
import {Main} from "./src/pages/Main/Main";
import {styles} from './app.styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}
