import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import { store } from './store';
import { Provider } from 'react-redux';
import Serviceabout from "./screens/Serviceabout";
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Veterinary clinic' component={HomeScreen} />
                    <Stack.Screen name='Service' component={Serviceabout} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

