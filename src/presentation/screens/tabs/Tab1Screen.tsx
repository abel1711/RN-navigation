import { Image, Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { globalStyle } from '../../theme/theme';

export const Tab1Screen = () => {

    return (
        <View style={{
            ...globalStyle.container,
            justifyContent: 'center'
        }}>
            <Image 
                source={{uri: 'https://openwebsolutions.in/blog/wp-content/uploads/2019/04/all-about-react-native-apps-776x415.png'}}
                // width={200}
                height={200}
            />
        </View>
    )
};