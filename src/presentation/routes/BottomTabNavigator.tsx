import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Tab1Screen } from "../screens/tabs/Tab1Screen";
import { globalColors } from "../theme/theme";
import { StackNavigation } from "./StackNavigation";
import { TopTabNavigator } from "./TopTabNavigator";
import { Ionicons } from "../components/shared/Ionicons";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {


    return (
        <Tab.Navigator
        initialRouteName="Tab3"
            sceneContainerStyle={{
                backgroundColor: globalColors.background
            }}
            screenOptions={{
                tabBarActiveTintColor: globalColors.tertiary,
                headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0
                }

            }}
        >
            <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<Ionicons color={color} name="alert-circle-outline" />) }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<Ionicons color={color} name="apps-outline" />) }} component={TopTabNavigator} />
            <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<Ionicons color={color} name="bicycle-outline" />) }} component={StackNavigation} />
        </Tab.Navigator>
    );

};