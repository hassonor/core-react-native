import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import Homepage from './Home';
import {Platform} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'
import Header from './Header';
import Footer from './Footer';
import {navigationRef} from './RootNavigation';
import NewsDetail from './NewsDetail';
import AboutHasson from './About';
import QuotePage from './Quote';
import CatalogPage from './Catalog';
import CatalogDetail from './CatalogDetail';


const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }
    else {
        return (
            <NavigationContainer
            style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
            ref={navigationRef}
            >
                <Stack.Navigator initalRouteName="Hasson" screenOptions={{ headerMode: 'screen'}}>
                    <Stack.Screen name="Hasson" component={Homepage}
                    options={{
                        header: () => <Header headerDisplay="Hasson"/>
                    }}/>
                    <Stack.Screen name="NewsDetail" component={NewsDetail}
                                  options={{
                                      header: () => <Header headerDisplay="News"/>
                                  }}/>
                    <Stack.Screen name="About" component={AboutHasson}
                                  options={{
                                      header: () => <Header headerDisplay="About Hasson"/>
                                  }}/>
                    <Stack.Screen name="Quote" component={QuotePage}
                                  options={{
                                      header: () => <Header headerDisplay="Quote"/>
                                  }}/>
                    <Stack.Screen name="Catalog" component={CatalogPage}
                                  options={{
                                      header: () => <Header headerDisplay="Hasson Robotics"/>
                                  }}/>
                    <Stack.Screen name="CatalogDetail" component={CatalogDetail}
                                  options={{
                                      header: () => <Header headerDisplay="Product Information"/>
                                  }}/>
                </Stack.Navigator>
                <Footer/>
            </NavigationContainer>
        );
    }
}


