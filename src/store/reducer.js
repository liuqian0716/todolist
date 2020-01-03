import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'
const defaultState = {
    inputValue: 'write something',
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    // console.log(state, action)
    // reducer里只能接受state，不能改变state
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1);
        return newState
    }
    return state
}