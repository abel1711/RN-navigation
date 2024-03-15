import { View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigation';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

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