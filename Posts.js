import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

import PostImages from './PostImages'

function Posts({ item, navigation }){

const onPressViewPostDetails = () => {}
const [valueComment, onChangeComment] = useState('')

function postsItem({ item }){
return (
<View style={styles.posts_item}>
<View style={{flexDirection: 'column'}}  >
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
</View>
<PostImages item={'post_images' in item ? item.post_images: item} navigation={navigation}/>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
{<View
    style={[styles.like,{ backgroundColor: item.like ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.favorite,{ backgroundColor: item.favorite ? 'red' : 'black' }]}
   />}
<Text style={styles.post_label} numberOfLines={1}>{item.post_label}</Text>
</View>
<Text style={styles.post_description}>{item.post_description}</Text>
<TouchableOpacity  onPress={onPressViewPostDetails}>
    <View style={styles.view_post_details}>{'View Post Details'}</View>
</TouchableOpacity>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
<TextInput style={styles.comment} value={valueComment} onChangeText={onChangeComment} placeholder={'Comment'} />
</View>
)}

return (
<FlatList
    style={styles.posts}
    data={item}
    renderItem={postsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Posts;

const styles = StyleSheet.create({
    "user_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "user_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "like": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "favorite": {
        "width": 30,
        "height": 30,
        "borderRadius": 20,
        "marginTop": 5
    },
    "post_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "fontWeight": "400",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "post_description": {
        "fontSize": 12,
        "fontWeight": "250",
        "paddingHorizontal": 2,
        "marginHorizontal": 10,
        "marginTop": 5
    },
    "view_post_details": {
        "flex": 1,
        "padding": 10,
        "margin": 5,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5",
        "color": "white"
    },
    "profile_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "comment": {
        "flex": 1,
        "fontSize": 15,
        "fontWeight": "400",
        "padding": 10,
        "margin": 5,
        "backgroundColor": "whitesmoke"
    }
});