// 引入子管理员
import cartRenducer from "./cartReducer"
//引入管理员合并函数
import {combineReducers} from "redux"
// 合并并导出
export default combineReducers({cartRenducer})