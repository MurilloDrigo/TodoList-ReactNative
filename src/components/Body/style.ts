import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bodyContainer:{
        backgroundColor: '#FFF',
    },
    itemList:{
        flexDirection:'row',
        padding:10,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0C082D',
        borderWidth: 1,
        borderColor: '#9900FF',        
    },
    itemIcon:{
        display:'flex',
        backgroundColor:'#9900FF'        
    },
    item:{
        color:'white',
        fontSize:30,
        backgroundColor:'#0C082D',
        fontFamily:'Marker Felt',
    },
    tituloTarefa:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C082D',
        color: 'white',
        fontSize:30,
        fontFamily:'Marker Felt',

    }
})