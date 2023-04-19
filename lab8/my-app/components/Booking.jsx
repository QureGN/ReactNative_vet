import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {axiosInstance} from "../API";
import {setBooking, setServices, setServices1} from "../store/serviceSlice";
import {Modal, ScrollView, StyleSheet, Text, View} from "react-native";
import {AntDesign, FontAwesome5, Ionicons} from "@expo/vector-icons";
import Cart from "./cart";
import ServiceCard from "./ServiceCard";
import CartItems from "./cartItems";
import BookingItems from "./BookingItems";

export default function Booking({navigation}) {
    const dispatch = useDispatch();
    const services = useSelector((store)=> store.service.booking)
    const [modalWindow, setModalWindow]=useState(false)
    const [Windows, setModal]=useState(false)

    useEffect(() => {

        async function getAllDevices() {
            await axiosInstance.get('/stocks2').then((response) => dispatch(setServices1(response?.data)));
        }
        getAllDevices();
    }, [dispatch]);


    return (
        <ScrollView>

           <View style={styles.page}>

                {!!services && services.map((service)=> <BookingItems key={service.id} {...service} navigation={navigation}/>)}
            </View>
        </ScrollView>);
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0EFEA',
    },
    title:{
        textAlign:'center',
        fontSize: 24
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
    }

});
