// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChatScreen,
  Contacts,
  ForgotPassword,
  Login,
  Messages,
  Profile,
  SignUp,
  SplashScreen,
} from '../pages';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../utils';
import {DrawerContent} from '../components';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Messages"
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          borderTopLeftRadius: 35,
        },
        drawerActiveBackgroundColor: 'transparent',
        drawerLabelStyle: colors.secondary,
      }}>
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
