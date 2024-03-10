import { View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View
            style={globalStyle.container}
        >
            <PrimaryButton
                label='Productos'
                onPress={() => navigation.navigate('Products' as never)}
            />  
            
            <PrimaryButton
                label='Settings'
                onPress={() => navigation.navigate('Settings' as never)}
            />
        </View>
    )
};