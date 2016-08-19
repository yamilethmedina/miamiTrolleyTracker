import React, { Component, PropTypes } from 'react'
import {View, ScrollView, Image } from 'react-native'
import styles from './NavigationDrawerStyles'
import { Actions as NavigationActions } from 'react-native-router-flux'

import DrawerContentRow from './DrawerContentRow'

import {routeObjects} from '../../utils'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }
  
  handlePressDeviceArticles = () => {
    this.toggleDrawer()
    console.log('drawerPress')
    // NavigationActions.articles()
  }

  generateContentRows () {
    var routeNames = Object.keys(routeObjects).map(function (key) {return routeObjects[key]['name']}).sort();
    return routeNames.map((routeName, i) => {
      return <DrawerContentRow key={`DrawerContentRow-${i}`} text={routeName} pressAction={this.handlePressDeviceArticles} />

    })
  }

  render () {
    return (
      <ScrollView style={{backgroundColor:'#FFFFFF'}} contentContainerStyle={[styles.container]} bounces={false}>
      <View style={{flex: 1,alignSelf:'stretch',  paddingTop:64}}>
      {this.generateContentRows()}
      </View>
      </ScrollView>
    )
  }

}

DrawerContent.propTypes = {
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
