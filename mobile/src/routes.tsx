import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
import { createStackNavigator } from '@react-navigation/stack'; // npm install @react-navigation/stack

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator 
            headerMode = "none" 
            screenOptions = {{
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }
            }}
        >
                <AppStack.Screen name = "Home" component = {Home} />
                <AppStack.Screen name = "Points" component = {Points} />
                <AppStack.Screen name = "Detail" component = {Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;