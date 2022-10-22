import {ADD_PERSON} from '../constant'

//初始化人的列表
const initState = [{age:250}]

export default function personReducer(preState=initState,action){
	// console.log('personReducer@#@#@#');
	const {type,data} = action
	switch (type) {
		case ADD_PERSON: //若是添加一个人
			return [data]
		default:
			return preState
	}
}