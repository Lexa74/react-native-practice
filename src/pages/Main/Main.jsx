import {styles} from "./main.styles";
import {ActivityIndicator, FlatList, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState, useEffect} from 'react'
import {Joke} from "./components/Joke/Joke";

export const Main = () => {
    const [data, setData] = useState([]);
    const [heading, setHeading] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const fetchPromise = () => {
        setIsLoading(true)
        fetch('https://api.chucknorris.io/jokes/search?query=fet')
            .then(res => res.json())
            .then((res) => setData(res.result))
            .catch((err) => alert(err))
            .finally(() => setIsLoading(false))
    }

    useEffect(fetchPromise, [])

    if(isLoading) {
        return <ActivityIndicator size={'large'} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder={'Введите заголовок'} style={{borderWidth: 1}} value={heading} onChangeText={setHeading}/>
            <Text style={{fontSize: 48, marginBottom: 30}}>{heading}</Text>
            <FlatList
                refreshing={isLoading}
                onRefresh={fetchPromise}
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({item}) => <Joke textValue={item.value}/>}/>
            <StatusBar style="auto" />
        </View>
    )
}