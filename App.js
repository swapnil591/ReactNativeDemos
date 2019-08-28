/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



// const App = () => {
//   return (
//     // <Fragment>
//     //   <StatusBar barStyle="dark-content" />
//     //   <SafeAreaView>
//     //     <ScrollView
//     //       contentInsetAdjustmentBehavior="automatic"
//     //       style={styles.scrollView}>
//     //       <Header />
//     //       {global.HermesInternal == null ? null : (
//     //         <View style={styles.engine}>
//     //           <Text style={styles.footer}>Engine: Hermes</Text>
//     //         </View>
//     //       )}
//     //       <View style={styles.body}>
//     //         <View style={styles.sectionContainer}>
//     //           <Text style={styles.sectionTitle}>Step One</Text>
//     //           <Text style={styles.sectionDescription}>
//     //             Edit <Text style={styles.highlight}>App.js</Text> to changed this
//     //             screen and then come back to see your edits.
//     //           </Text>
//     //         </View>
//     //         <View style={styles.sectionContainer}>
//     //           <Text style={styles.sectionTitle}>See Your Changes</Text>
//     //           <Text style={styles.sectionDescription}>
//     //             <ReloadInstructions />
//     //           </Text>
//     //         </View>
//     //         <View style={styles.sectionContainer}>
//     //           <Text style={styles.sectionTitle}>Debug</Text>
//     //           <Text style={styles.sectionDescription}>
//     //             <DebugInstructions />
//     //           </Text>
//     //         </View>
//     //         <View style={styles.sectionContainer}>
//     //           <Text style={styles.sectionTitle}>Learn More</Text>
//     //           <Text style={styles.sectionDescription}>
//     //             Read the docs to discover what to do next:
//     //           </Text>
//     //         </View>
//     //         <LearnMoreLinks />
//     //       </View>
//     //     </ScrollView>
//     //   </SafeAreaView>
//     // </Fragment>

//     <View style={styles.body}>
//     <Text style={styles.sectionTitle}>Hello World</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  body: {
    flex : 1
     
  },  
  half1:{
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'

  },
  half2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  half2x:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  half21:{
    backgroundColor: 'green',
  
  },
  half22:{
    backgroundColor: 'black',
  
  },
  text:{
    color: 'white',
    fontSize: 30

  }
});

export default class App extends Component{

  constructor(){
    super()
    this.state = {}
    this.state.customStyle = {
      color : 'red'
    }

    setInterval(() => {
      if(this.state.customStyle.color == 'red'){
      this.setState({
        customStyle: {
          color: 'green'
        }
      })
    }else{
      this.setState({
        customStyle: {
          color: 'red'
        }
      })
    }
    }, 1000);
  }

  render(){
    return (
      <View style={styles.body}>
        <View style={styles.half1}>
          <Text style={styles.text}>This is 1</Text>
        </View>
        <View style={styles.half2}>
          <View style={[styles.half2x, styles.half21]}>
          <Text style={styles.text}>This is 2/1</Text>
          </View>
          <View style={[styles.half22, styles.half2x]}>
          <Text style={styles.text}>This is 2/2</Text>
          </View>
        </View>
      </View>
    );
  }

}
