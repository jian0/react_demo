import Axios from "axios"
// export const cartAddNum = (unit) => {
//     return {
//         type: "add",
//         unit
//     }
// }
// 简写版
export const cartAddNum = (unit) => ({ type: "add", unit })
// 初始化数量
// export const initNumAction= (num) => ({ type: "init", unit:num })
export const initNumAction = () => {
    return (dispatch) => {
        Axios.get("http://157.122.54.189:9060/home/swiper")
            .then(res => {
                // console.log(res);
                let num = res.data.body.length
                dispatch({ type: "init", unit: num })
            })
    }

}