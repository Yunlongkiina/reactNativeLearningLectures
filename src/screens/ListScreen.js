import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen =()=>{
    const friends = [
        {name:'Friends 001', age:20},
        {name:'Friends 002',age:20},
        {name:'Friends 003',age:20},
        {name:'Friends 004',age:20},
        {name:'Friends 005',age:20},
        {name:'Friends 006',age:20},
        {name:'Friends 007',age:20},
        {name:'Friends 008',age:20},
        {name:'Friends 009',age:20},
        {name:'Friends 010',age:20},
        {name:'Friends 011',age:20},
        {name:'Friends 012',age:20},

    ];
    const listStyle = StyleSheet.create({
        listStyle:{
            fontSize:30,
            height:100
        }
    })

    return (
        <FlatList
                keyExtractor={frien=>frien.name} 
                data={friends} 
                renderItem={
                    ({item})=>{return <Text style={listStyle.listStyle}>{item.name}-- Age{item.age}</Text>}
                }
               
            />
    )            
}

export default ListScreen;