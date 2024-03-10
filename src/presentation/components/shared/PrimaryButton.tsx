import { Pressable, Text } from 'react-native';
import { globalStyle } from '../../theme/theme';


interface Props {
    onPress: () => void;

    label: string;
}

export const PrimaryButton = ({ label, onPress }: Props) => {

    return (
        <Pressable
            onPress={() => onPress()}
            style={globalStyle.primaryButton}
        >
            <Text
                style={globalStyle.buttonText}
            >{label}</Text>

        </Pressable>
    )
};