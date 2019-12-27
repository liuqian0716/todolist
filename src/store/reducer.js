const defaultState = {
    inputValue: 'write something',
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    console.log(state, action)
    // reducer里只能接受state，不能改变state
    if(action.type === 'change'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }
    return state
}