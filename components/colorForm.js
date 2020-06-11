import React, {useState} from 'react'
import {Text, TextInput, View, Dimensions} from 'react-native'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ColorForm = props => {
    let [myColor, setMyColor] = useState('')

    const setColor = (input) => {
        setMyColor(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(myColor)
        
    }
    return (
        <View>
            <TextInput
                style={{height: 40, width: width, textAlign: 'center'}}
                autoFocus={true}
                enablesReturnKeyAutomatically={true}
                placeholder="Enter a Color"
                onChangeText={text => setColor(text)}
                defaultValue={myColor}
                onSubmitEditing={handleSubmit}
                blurOnSubmit={true}
                focus={true}
            />
        </View>
    )
}

export default ColorForm