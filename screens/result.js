import { Image,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View>
        <View>
            <Text>Result</Text>
        </View>
        <View style = {styles.bannerContainer}>
        <Image source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
            style = {styles.banner}
            resizeMode = "contain"
            />
        </View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    banner:{
        height:400,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        paddingTop:40,
        paddingHorizontal : 20,
        height:'100%',
    },
})