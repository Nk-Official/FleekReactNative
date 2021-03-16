import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput} from 'react-native';



const Card = props => {

    const [textValue, setTextValue] = useState('')
    const inputHandler = inputText => {
        setTextValue(inputText.replace(/[^0-9]/g,''))
    }
    return (
        <View style={style.container}>
            <TextInput style={style.textInput} value={textValue} autoCorrect= {false}
        autoCapitalize = {false}
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={inputHandler}
        textAlign='center'></TextInput>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    textInput:{
         width: 200,
         height: '60%',
         borderWidth: 1,
        borderColor: 'black',
        
    }
})

export default Card;