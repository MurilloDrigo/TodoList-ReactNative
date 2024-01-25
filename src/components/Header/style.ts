import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer:{
        flex:0,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        backgroundColor:"#212121",
        padding:10,
        display:'flex',
    },
    
    botaoAdicionar:{
        padding: 5,
        backgroundColor: "#9900FF",
        
      },
    titulo:{
        fontSize:50,
        padding:10,
        color: "#9900FF",  
        fontFamily: "Impact",

    }
})