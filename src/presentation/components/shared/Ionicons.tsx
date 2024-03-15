import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name: string;
    color?: string;
    size?: number;
}

export const Ionicons = ({name,color = 'black', size = 25 }:Props) => {

    return (
        <Icon name={name} size={size} color={color} />
    )
};