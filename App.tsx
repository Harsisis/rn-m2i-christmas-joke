import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomePage} from './src/components/homepage/HomePage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CharacterPage} from './src/components/characters/CharacterPage';
import {TCharac} from './src/components/characters/stores/charactersStore';

export type TStackRoute = {
  ['/home']: any;
  ['/character']: {character: TCharac};
};

const Stack = createStackNavigator<TStackRoute>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{...backgroundStyle, flex: 1}}
      forceInset={{top: 'always'}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          transparentCard={true}
          transitionConfig={{
            containerStyle: {
              backgroundColor: 'transparent',
            },
          }}
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="/home">
          <Stack.Screen name="/home" component={HomePage} />
          <Stack.Screen name="/character" component={CharacterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
