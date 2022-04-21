import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

export default function Footer() {
    return (
        <View style={styles.footer}>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>RootNavigation.navigate('Hasson')}
            >
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>RootNavigation.navigate('About')}
            >
                <Text>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>RootNavigation.navigate('Quote',
                    {model: 'Footer',modelnumber: 'NoMessage'})}
            >
                <Text>Quote</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() =>RootNavigation.navigate('Catalog')}
            >
                <Text>Catalog</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    button:{
        padding: 20
    }
});