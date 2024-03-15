import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { BottomTabNavigator } from './BottomTabNavigator';
import { Ionicons } from '../components/shared/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

    return (
        <Drawer.Navigator
        drawerContent={(props)=><CustomDrawerContent {...props}/>}
            screenOptions={{
                
                headerShown: false,
                drawerType: 'front',

                drawerActiveBackgroundColor: globalColors.tertiary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.tertiary,
                drawerItemStyle:{
                    borderRadius: 50,   
                    paddingHorizontal: 20

                }
            }}
        >
            <Drawer.Screen name="Tabs" options={{drawerIcon: ({color})=>(<Ionicons name='list-outline' color={color} />)}} component={BottomTabNavigator} />
            <Drawer.Screen name="Profile" options={{drawerIcon: ({color})=>(<Ionicons name='settings-outline' color={color} />)}} component={ProfileScreen} />
        </Drawer.Navigator>
    )
};

const CustomDrawerContent = (props: DrawerContentComponentProps )=>{


    return(
        <DrawerContentScrollView>
            <View style={{
                height: 200,
                backgroundColor: globalColors.tertiary,
                margin:30,
                borderRadius: 50
            }}/>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}