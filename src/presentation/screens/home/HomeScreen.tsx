import { DrawerActions, useNavigation, type NavigationProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigation';
import { globalStyle } from '../../theme/theme';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: ()=>(
                <Pressable
                    onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}
                >
                    <Text>Menu</Text>
                </Pressable>
            )
        })
    }, [])

    return (
        <View
            style={globalStyle.container}
        >
            <PrimaryButton
                label='Productos'
                onPress={() => navigation.navigate('Products')}
            />  
            
            <PrimaryButton
                label='Settings'
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
};