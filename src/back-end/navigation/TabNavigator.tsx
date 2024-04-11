import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from "../../front-end/screens/FirstScreen";
import { MyTabBar } from "./TabBar";
import Home from "../../front-end/screens/HomeScreen";
import Chat from "../../front-end/screens/Chatbot";



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name = "Contacts" component={Home} options={{
        tabBarLabel: 'Contacts',
        }} />
      <Tab.Screen name="Add Contact" component={Home} options={{
        tabBarLabel: 'Add Contact',
      }} />
      <Tab.Screen name="Reccomendations" component={Chat} options={{
        tabBarLabel: 'Reccomendations',
        }} />
    </Tab.Navigator>
  );
}

export default TabNavigator