import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const ProfileScreen = () => {

    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View
            style={{
                marginTop: top + 20,
                paddingHorizontal: 20,
                flex: 1,
            }}
        >
            <HamburgerMenu />
            <Text style={{
                marginBottom: 10
            }}>ProfileScreen</Text>
            <PrimaryButton 
                label='Menu'
                onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </View>
    )
};