import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { Ionicons } from '../components/shared/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" options={{tabBarIcon: ({color})=>(<Ionicons name='person-outline' color={color} />)}} component={ProfileScreen} />
            <Tab.Screen name="About"   options={{tabBarIcon: ({color})=>(<Ionicons name='document-text-outline' color={color} />)}} component={AboutScreen} />
        </Tab.Navigator>
    )
};