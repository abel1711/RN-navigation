import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigation } from './presentation/routes/DrawerNavigation';

export const App = () => {

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
};