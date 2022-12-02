import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { PrimaryButton } from '../components/Button';
import { COLORS, icons } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rupiah } from '../../utils/currency';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { apiCreateOrder } from '../../services/OrderService';
const { width } = Dimensions.get("window")

const Order = (props) => {

    const [orderItems, setOrderItems] = React.useState([]);

    useEffect(() => {
        const asyncWrapper = async () => {
            const items = await AsyncStorage.getItem('@orderItems');
            setOrderItems(JSON.parse(items));
        }
        asyncWrapper();
    }, [])


    const OrderCard = ({ item }) => {
        return (
            <View>
                <View style={{ width: width - 20, margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10 }}>
                    <Image resizeMode={"contain"} style={{ width: width / 3, height: width / 3 }} source={{ uri: item.image }} />
                    <View style={{ flex: 1, backgroundColor: 'trangraysparent', padding: 10, justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', color: "#33c37d", fontSize: 18 }}>{rupiah(item.price * item.qty)}</Text>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>x{item.qty}</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.header}>
                <Icon name="chevron-back" size={28} onPress={() => props.navigation.goBack()} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Orders</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={orderItems}
                renderItem={({ item }) => <OrderCard item={item} />}
                ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
                ListFooterComponent={
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{rupiah(orderItems.reduce((a, b) => a + (b.price * b.qty), 0))}</Text>
                        </View>
                    </View>}
            />
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    OrderCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionBtn: {
        width: 80,
        height: 30,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default Order;