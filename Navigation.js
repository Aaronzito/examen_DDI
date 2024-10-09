import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import FeedScreen from "./screens/FeaturedArticle";
import ScreenVideo from "./screens/Video";
import CustomScreen from "./screens/Botones";
import StackScreen from "./screens/StackScreen";


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';


const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="Main"
        >
        <HomeStackNavigator.Screen
            name="Main"
            component={FeedScreen}
        />
        <HomeStackNavigator.Screen
            name="Details"
            component={StackScreen}
            options={{
                headerBackTitleVisible: false,
            }}
        />

        </HomeStackNavigator.Navigator>
    )
}   

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="FeaturedArticle"
            screenOptions={{
                tabBarActiveTintColor: "green",
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="Video" 
                component={ScreenVideo}
                options={{
                    tabBarLabel: 'Video',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="play" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
            <Tab.Screen 
                name="Botones" 
                component={CustomScreen}
                options={{
                    tabBarLabel: 'Botones',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="book" size={size} color={color} />
                    ),
                    headerShown: true,
                }}  
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}