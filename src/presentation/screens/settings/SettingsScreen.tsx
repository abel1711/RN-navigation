import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import { RootStackParams } from '../../routes/StackNavigation';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyle.container}>
            <Text style={{ marginBottom: 10 }}>SettingsScreen</Text>

            <PrimaryButton
                label='Atras'
                onPress={() => navigation.goBack()}

            />
            <PrimaryButton
                label='To home'
                onPress={() => navigation.dispatch(StackActions.popToTop())}

            />
        </View>
    )
};