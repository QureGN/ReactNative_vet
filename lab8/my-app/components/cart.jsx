
import React from 'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {resetCart, resetService, setCart} from "../store/serviceSlice";
import ServiceCard from "./ServiceCard";
import CartItems from "./cartItems";
import {axiosInstance} from "../API";



export default function Cart({ navigation }) {
    const cart = useSelector((store)=> store.service.cart)
    const dispatch =useDispatch();

    async function booking(ser) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',

            }
        };
        const body = JSON.stringify({time1: 1, client_user: 2, service1: ser.pk})

        const res = await axiosInstance.post(`/stocks2/`,body, config)

    }

    const handlePress = ()=>{
        cart.map(ser => booking(ser));
        dispatch(resetCart());
    }


    return (
        <ScrollView >
            <View style={styles.page}>

                {!!cart && cart.map((service)=> <CartItems key={service.pk} {...service} navigation={navigation}/>)}
                <Button title='Бронировать' onPress={handlePress}/>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        height: '100%' ,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#E0EFEA',
    },

});