import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return <Text>Home</Text>;
}

function SearchScreen() {
    return <Text>Search</Text>;
}

function NotificationScreen() {
    return <Text>Notification</Text>;
}

function MessageScreen() {
    return <Text>Message</Text>;
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen
                    name="Notification"
                    component={NotificationScreen}
                />
                <Tab.Screen name="Message" component={MessageScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
