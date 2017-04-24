'use strict';

import React from 'react';
import {StyleSheet, Component, AppRegistry, NavigatorIOS} from 'react-native';
import SearchPage from './components/SearchPage';

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class MenuSpotterIOS extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search Page',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('MenuSpotterIOS', () => PropertyFinderApp);
