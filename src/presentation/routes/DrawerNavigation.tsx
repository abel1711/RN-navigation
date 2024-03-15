import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigation } from './StackNavigation';
import { globalColors } from '../theme/theme';
import { View } from 'react-native';

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
                drawerPosition: 'right',
                drawerItemStyle:{
                    borderRadius: 50,   
                    paddingHorizontal: 20

                }
            }}
        >
            <Drawer.Screen name="StackNavigation" component={StackNavigation} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
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