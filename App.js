import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import ColorForm from './components/colorForm'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

let colors = []

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  colorBlock: {
    width: width,
    justifyContent: 'center',
  },
  colorShape: {
    fontSize: (height / 10)
  }
});

export default function App() {
  let [theseColors, setColors] = useState(colors)

  const colorMap = theseColors.map((color, i) => {
    console.log(color)
    return (
      <View key={i}>
        <View style={[styles.colorBlock, {backgroundColor: color}]}>
          <Text style={[styles.colorShape, {color: color}]}>{color}</Text>
        </View>
      </View>
    )
  })

  const onSwipeLeft = () => {
    colors = []
    setColors(colors)
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  }

  const addColor = (userColor) => {
    if(userColor) {
      colors = colors.concat(userColor)
      setColors(colors)
    }
  }
  return (
    <View style={styles.container}>
    <GestureRecognizer
      onSwipeLeft={() => onSwipeLeft()}
      config={config}
      >
      <View ul>{colorMap}</View>
      <ColorForm addColor = {addColor} />
    </GestureRecognizer>
    </View>
  );
}