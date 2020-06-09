import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PizzaTranslator from './components/pizzaTranslator'
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

// "Option" does not exist on mobile, thus breaking this functionality.
//   const isValidColor = (strColor) => {
//     var s = new Option().style;
//     s.color = strColor;
//     // return 'false' if color wasn't assigned
//     return s.color == strColor.toLowerCase();
// }

const addColor = (userColor) => {
  if(userColor) {
    colors = colors.concat(userColor)
    setColors(colors)
  }
}
  return (
    <View style={styles.container}>
      <View ul>{colorMap}</View>
      <ColorForm addColor = {addColor} />
    </View>
  );
}