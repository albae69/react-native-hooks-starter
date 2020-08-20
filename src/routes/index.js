import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';

import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Routes = () => {
  const [loading, setLoading] = useState(false);

  const Tab = createBottomTabNavigator();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings';
                }
                return <Icons name={iconName} size={25} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'red',
              inactiveTintColor: 'lightgray',
              showLabel: true,
              showIcon: true,
              keyboardHidesTabBar: true,
              indicatorStyle: {width: 0},
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Routes;
