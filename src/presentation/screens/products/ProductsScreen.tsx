import { FlatList, Text, View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigation';

const products = [
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
    { id: 4, name: 'Producto 4' },
    { id: 5, name: 'Producto 5' },
    { id: 6, name: 'Producto 6' },
    { id: 7, name: 'Producto 7' },
    { id: 8, name: 'Producto 8' },
];

export const ProductsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyle.container}>
            <Text style={{ marginBottom: 10, fontSize: 30, color: 'black' }}>Productos</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        label={item.name}
                        onPress={() => navigation.navigate('Product', { ...item })}
                    />
                )}
            />
            <Text style={{ marginBottom: 10, fontSize: 30, color: 'black' }}>Ajustes</Text>
            <PrimaryButton
                label='Ajustes'
                onPress={() => { navigation.navigate('Settings') }}
            />
        </View>
    )
};