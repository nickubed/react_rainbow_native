import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'

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
                style={{height: 40}}
                placeholder="Enter a Color"
                onChangeText={text => setColor(text)}
                defaultValue={myColor}
                onSubmitEditing={handleSubmit}
            />
        </View>
    )
}

export default ColorForm