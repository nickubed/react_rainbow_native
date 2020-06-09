import React from 'react'
import {Image, ScrollView, Text} from 'react-native'

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
}

const Scrollable = props => {
    return (
        <ScrollView>
            <Text style={{ fontSize: 96 }}>Scroll Me!</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>More text is here</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>A lil more here</Text>
        </ScrollView>
    )
}

export default Scrollable