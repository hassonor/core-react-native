import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableWithoutFeedback} from 'react-native';



export default function Homepage({navigation}){
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [newsData, setNewsData] = useState([]);

   useEffect( () => {
       // Set your own news api key
            fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=e236182a749b434688dc657fe585cfda`)
                .then((response)=> response.json())
                .then((json)=> setNewsData(json.articles))
                .catch((error)=> console.error(error))
                .finally(()=> setIsLoadingData(false));

    }, [])



    const storyItem = ({item}) =>{
        return(
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate('NewsDetail', {url: item.url})
                }
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={styles.container}>
            {isLoadingData ? <ActivityIndicator/> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item) => item.url}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 100,
        width: '98%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontStyle: 'italic'
    }
});
