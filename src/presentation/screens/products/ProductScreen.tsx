import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigation';
import { globalStyle } from '../../theme/theme';
import { useEffect } from 'react';

export const ProductScreen = () => {
    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        }) 
    }, [])

    return (
        <View style={globalStyle.container}>
            <Text>Producto</Text>
            <Text style={{
                textAlign: 'center',
                fontSize: 20
            }}>{params.id} - {params.name}</Text>
        </View>
    )
};