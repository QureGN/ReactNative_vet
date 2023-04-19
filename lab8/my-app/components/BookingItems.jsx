import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import {useDispatch} from "react-redux";
import {setCart} from "../store/serviceSlice";
import BookingService from "./BookingService";


export default function BookingItems({ navigation, ...props }) {

    return (
        <View >
            <View >

                <View>

                    <BookingService key={props.pk} {...props} navigation={navigation}/>
                </View>

            </View>



        </View>
    );
}
