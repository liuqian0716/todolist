// 把所有的Redux Action放到一个文件里进行管理。
import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM}  from './actionTypes'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})