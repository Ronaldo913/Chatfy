import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome/index.js';
import SignIn from '../pages/SignIn/index.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"  
                component={Welcome}
            />

            <Stack.Screen 
                name="SingIn"  
                component={SignIn}
            />
        </Stack.Navigator>
    );
}