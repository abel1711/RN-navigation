import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigation';
import { globalStyle } from '../../theme/theme';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View
            style={globalStyle.container}
        >
            <HamburgerMenu />
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