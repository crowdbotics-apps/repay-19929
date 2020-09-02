import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList96447Navigator from '../features/NotificationList96447/navigator';
import Settings96446Navigator from '../features/Settings96446/navigator';
import Settings96438Navigator from '../features/Settings96438/navigator';
import UserProfile96436Navigator from '../features/UserProfile96436/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList96447: { screen: NotificationList96447Navigator },
Settings96446: { screen: Settings96446Navigator },
Settings96438: { screen: Settings96438Navigator },
UserProfile96436: { screen: UserProfile96436Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
