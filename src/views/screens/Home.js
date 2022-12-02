import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { icons, SIZES, COLORS, FONTS } from '../../constants'
import { apiGetFood } from "../../services/FoodService";
import { apiGetCategories } from "../../services/CategoryService";
import BottomSheetModalComponent from "../components/BottomSheetModal";
import { rupiah } from "../../utils/currency";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {

    const [categories, setCategories] = React.useState([])
    const [cart, setCart] = React.useState([])
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [foodFiltered, setFoodFiltered] = React.useState([])
    const [foods, setFoods] = React.useState([])
    const [detailFood, setDetailFood] = React.useState({})


    // variables
    const snapPoints = useMemo(() => ['80%'], []);
    const bottomSheetModalRef = useRef(null);

    const openModal = (item) => {
        setDetailFood(item)
        bottomSheetModalRef.current.present();
    };

    const getAllFoods = async () => {
        try {
            const response = await apiGetFood()
            if (response.status === 200) {
                setFoods(response.data)
                setFoodFiltered(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getAllCategories = async () => {
        try {
            const response = await apiGetCategories();
            if (response.status === 200) {
                setCategories(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllFoods()

        getAllCategories()
    }, [])

    const onSelectCategory = (category) => {
        let foodList = foods.filter(a => a.categoryId == category.id)
        setFoodFiltered(foodList)
        setSelectedCategory(category)
    }

    const addToChart = async (data) => {

        const itemcart = {
            id: data.id,
            name: data.name,
            price: data.price,
            qty: 1,
            image: data.image
        }
        // const itemcart = {
        //     food: data,
        //     quantity:  1,
        //     price: data.price,
        //     image: data.image
        //   }

        try {
            const jsonValue = await AsyncStorage.getItem('@cart')
            if (jsonValue != null) {
                let cart = JSON.parse(jsonValue)
                let index = cart.findIndex(a => a.id === data.id)
                if (index > -1) {
                    cart[index].qty = cart[index].qty + 1
                } else {
                    cart.push(itemcart)
                }
                await AsyncStorage.setItem('@cart', JSON.stringify(cart))
                setCart(cart)
            } else {
                await AsyncStorage.setItem('@cart', JSON.stringify([itemcart]))
                setCart([itemcart])
            }
        } catch (e) {
            console.log(e)
        }
        // AsyncStorage.getItem('cart').then((datacart)=>{
        //     if (datacart !== null) {
        //       // We have data!!
        //       const cart = JSON.parse(datacart)
        //       cart.push(itemcart)
        //       AsyncStorage.setItem('cart',JSON.stringify(cart));
        //     }
        //     else{
        //       const cart  = []
        //       cart.push(itemcart)
        //       AsyncStorage.setItem('cart',JSON.stringify(cart));
        //     }
        //     alert("Add Cart")
        //   })
        //   .catch((err)=>{
        //     alert(err)
        //   })
        

    }
    // function onSelectCategory(category) {
    //     //filter restaurant
    //     let filterFood = foods.filter(a => a.categoryId == category.id)
    //     console.log(filterFood)
    //     setFoods(filterFood)

    //     setSelectedCategory(category)
    // }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Juna Restaurant</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            resizeMode="contain"
                            style={{
                                borderRadius: 25,
                                width: 60,
                                height: 60
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2, marginTop: 10 }}>
                <Text style={{ ...FONTS.h2 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 6, width: '50%', paddingHorizontal: 10 }}
                // onPress={() => navigation.navigate("Restaurant", {
                //     item
                // })}
                onPress={() => openModal(item)}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={{ uri: item.image }}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 150,
                            borderRadius: SIZES.radius
                        }}
                    />
                    {/* 
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{`${item.duration} min`}</Text>
                    </View> */}
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body3 }}>{item.name.length > 17 ? item.name.substring(0, 17) + '...' : item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{ ...FONTS.body3 }}>{rupiah(item.price)}</Text>
                </View>
                {
                    item.qty > 0 && (
                        <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: COLORS.primary, borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5 }}>
                            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.qty}</Text>
                        </View>

                    )


                }
                <TouchableOpacity style={styles.buttonCart} onPress={() => addToChart(item)}>
                    <Text style={{ ...FONTS.body3, color: COLORS.white, fontWeight: "bold" }}>Add to cart</Text>
                </TouchableOpacity>

            </TouchableOpacity>
        )

        return (
            <FlatList
                data={foodFiltered}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <BottomSheetModalProvider>
            <SafeAreaView style={styles.container}>
                {/* {renderHeader()} */}
                {renderMainCategories()}
                {renderRestaurantList()}
            </SafeAreaView>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                style={styles.bottomSheet}
            >
                <BottomSheetModalComponent {...detailFood} />
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    buttonCart: {
        width: '100%',
        marginTop: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        padding: 5,
    }
})

export default Home;