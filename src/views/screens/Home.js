// import React from 'react';
// import {
//   Dimensions,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import {
//   FlatList,
//   ScrollView,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { COLORS } from '../constants';
// import { categoryData, foods } from '../constants/data';
// const {width} = Dimensions.get('screen');
// const cardWidth = width / 2 - 20;

// const Home = ({navigation}) => {
//   const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

//   const ListCategories = () => {
//     return (
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={style.categoriesListContainer}>
//         {categoryData.map((category, index) => (
//           <TouchableOpacity
//             key={index}
//             activeOpacity={0.8}
//             onPress={() => setSelectedCategoryIndex(index)}>
//             <View
//               style={{
//                 backgroundColor:
//                   selectedCategoryIndex == index
//                     ? COLORS.primary
//                     : COLORS.secondary,
//                 ...style.categoryBtn,
//               }}>
//               <View style={style.categoryBtnImgCon}>
//                 <Image
//                   source={category.image}
//                   style={{height: 35, width: 35, resizeMode: 'cover'}}
//                 />
//               </View>
//               <Text
//                 style={{
//                   fontSize: 15,
//                   fontWeight: 'bold',
//                   marginLeft: 10,
//                   color:
//                     selectedCategoryIndex == index
//                       ? COLORS.white
//                       : COLORS.primary,
//                 }}>
//                 {category.name}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     );
//   };
//   const Card = ({food}) => {
//     return (
//       <TouchableHighlight
//         underlayColor={COLORS.white}
//         activeOpacity={0.9}
//         onPress={() => navigation.navigate('DetailsScreen', food)}>
//         <View style={style.card}>
//           <View style={{alignItems: 'center', top: -40}}>
//             <Image source={food.image} style={{height: 120, width: 120}} />
//           </View>
//           <View style={{marginHorizontal: 20}}>
//             <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
//             <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
//               {food.ingredients}
//             </Text>
//           </View>
//           <View
//             style={{
//               marginTop: 10,
//               marginHorizontal: 20,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <Text style={{fontSize: 18, fontWeight: 'bold'}}>
//               ${food.price}
//             </Text>
//             <View style={style.addToCartBtn}>
//               <Icon name="add" size={20} color={COLORS.white} />
//             </View>
//           </View>
//         </View>
//       </TouchableHighlight>
//     );
//   };
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
//       <View style={style.header}>
//         <View>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={{fontSize: 28}}>Hello,</Text>
//             <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
//               Welcome to
//             </Text>
//           </View>
//           <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
//             Juna Restaurant
//           </Text>
//         </View>
     
//       </View>
//       <View
//         style={{
//           marginTop: 40,
//           flexDirection: 'row',
//           paddingHorizontal: 20,
//         }}>
//         <View style={style.inputContainer}>
//           <Icon name="search" size={28} />
//           <TextInput
//             style={{flex: 1, fontSize: 18}}
//             placeholder="Search for food"
//           />
//         </View>
//         <View style={style.sortBtn}>
//           <Icon name="tune" size={28} color={COLORS.white} />
//         </View>
//       </View>
//       <View>
//         <ListCategories />
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         numColumns={2}
//         data={foods}
//         renderItem={({item}) => <Card food={item} />}
//       />
//     </SafeAreaView>
//   );
// };

// const style = StyleSheet.create({
//   header: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//   },
//   inputContainer: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     flexDirection: 'row',
//     backgroundColor: COLORS.light,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   sortBtn: {
//     width: 50,
//     height: 50,
//     marginLeft: 10,
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   categoriesListContainer: {
//     paddingVertical: 30,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   categoryBtn: {
//     height: 45,
//     width: 120,
//     marginRight: 7,
//     borderRadius: 30,
//     alignItems: 'center',
//     paddingHorizontal: 5,
//     flexDirection: 'row',
//   },
//   categoryBtnImgCon: {
//     height: 35,
//     width: 35,
//     backgroundColor: COLORS.white,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     height: 220,
//     width: cardWidth,
//     marginHorizontal: 10,
//     marginBottom: 20,
//     marginTop: 50,
//     borderRadius: 15,
//     elevation: 13,
//     backgroundColor: COLORS.white,
//   },
//   addToCartBtn: {
//     height: 30,
//     width: 30,
//     borderRadius: 20,
//     backgroundColor: COLORS.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default Home;


import React, { useEffect } from "react";
import axios from 'axios' 

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../../constants'
import { apiGetFood } from "../../services/FoodService";
import { apiGetCategories } from "../../services/CategoryService";

const Home = ({ navigation }) => {

    const [categories, setCategories] = React.useState([])
    const [cart, setCart] = React.useState([])
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [foodFiltered, setFoodFiltered] = React.useState([])
    const [foods, setFoods] = React.useState([])

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
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

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
                style={{ marginBottom: SIZES.padding * 6 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item
                })}
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
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

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
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                  
                    <Text style={{ ...FONTS.body3 }}>{`Rp. ${item.price}`}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {/* {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        } */}

                        {/* Price */}
                        {/* {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        } */}
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={foodFiltered}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
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
    }
})

export default Home;