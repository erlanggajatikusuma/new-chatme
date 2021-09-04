import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const MainApp = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

const App = () => {
  return <MainApp />;
};

export default App;
