import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigation } from './presentation/routes/StackNavigation';

export const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
};