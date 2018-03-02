import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated, 
  PanResponder
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const ARTICLES = [
  {id: "1", uri: require('./src/imgs/1.png')},
  {id: "2", uri: require('./src/imgs/2.jpg')},
  {id: "3", uri: require('./src/imgs/3.jpg')},
  {id: "4", uri: require('./src/imgs/4.jpg')}
];

export default class App extends Component{
  
  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

  }

  componentWillMount() {

    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (-gestureState.dy > 50 && -gestureState.vy > 0.7) {

          Animated.timing(this.position, {
            toValue: ({ x: 0, y: -SCREEN_HEIGHT }),
            duration: 400
          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 })
            this.position.setValue({ x: 0, y: 0 })

          })
        }
        else {
          Animated.spring(this.position, {
            toValue: ({ x: 0, y: 0 })
          }).start()
        }
      }
    })

  }

  renderArticles = () => {

    return ARTICLES.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null
      }
      if (i == this.state.currentIndex) {

        return (

          <Animated.View key={item.id} style={this.position.getLayout()}
            {...this.PanResponder.panHandlers}
          >
            <View style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: 'white' }}>

              <View style={{ flex: 2, backgroundColor: 'black' }}>
                <Image source={ARTICLES[i].uri}
                  style={{ flex: 1, height: null, width: null, resizeMode: 'center' }}
                ></Image>
              </View>
              <View style={{ flex: 3, padding: 5 }}>
                <Text>
                Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.     
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.  
                </Text>
              </View>
            </View>
          </Animated.View>
        )
      }
      else {

        return (
          <Animated.View key={item.id}

          >
            <View style={{ flex: 1, position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH, backgroundColor: 'white' }}>

              <View style={{ flex: 2, backgroundColor: 'black' }}>
                <Image source={ARTICLES[i].uri}
                  style={{ flex: 1, height: null, width: null, resizeMode: 'center' }}
                ></Image>
              </View>
              <View style={{ flex: 3, padding: 5 }}>
                <Text>
                Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.     
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.
                  Lorem ipsum dolor sit amet, 
                  mei et quidam tibique urbanitas, omnes 
                  soleat signiferumque in cum. 
                  His minim postea ei. Pri ei esse libris 
                  placerat, mel an ullum maluisset. 
                  Ad nam oportere similique. Cu his discere 
                  erroribus accommodare, impedit appellantur 
                  mediocritatem no has. Sit ut partiendo adversarium.  
                </Text>
              </View>
            </View>
          </Animated.View>
        )

      }
    }).reverse()

  }  
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderArticles()}
      </View>
    );
  }
}


