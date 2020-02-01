import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(function(config) {
        console.log('拦截修改数据成功！')
        console.log(config)
        return config;
    }, function(error) {
        return Promise.reject(error);
    })
    // 响应拦截器
axios.interceptors.response.use(function(response) {
    console.log('响应修改数据拦截！！')
    return response;
}, function(error) {
    return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                // 请求成功的话返回请求到的数据
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export default {
    JH_news(url, params) {
        return fetch(url, params);
    }
}