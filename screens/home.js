import {Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
        <Title/>
        <View style = {styles.bannerContainer}>
            <Image source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
            style = {styles.banner}
            resizeMode = "contain"
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Home

const styles = StyleSheet.create({
    banner:{
        height:400,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    container:{
        paddingTop:40,
        paddingHorizontal : 20,
        height:'100%',

    },
    button:{

        width:'100',
        backgroundColor:'#1A759F',
        padding:20,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight:'600',
        color:'white',
    },
})