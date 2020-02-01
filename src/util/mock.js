import Mock from 'mockjs'
const Random = Mock.Random;

const produceData = {
        // 当前100条数据已经足够
        "studentInfo|50": [{
            // 'studentId|+1': 2,
            'studentId|001-100': 9,
            // 'startDate|1': Random.date(),
            'startDate|1': "@date",
            'sex|1': ['男 ', '女 '],
            "age|18-28": 18,
        }]
    }
    // 这里的模拟的带有url,数据源,请求方式的mock会被整个项目文件中的api请求检索到，如果url匹配一致，就会使用这里的数据源
Mock.mock('/news/index', 'post', produceData);


const modifyData = {
        // 要修改的数据源
        "studentInfo|1": [{
            // 'studentId|+1': 2,
            'studentId|001-100': 9,
            // 'startDate|1': Random.date(),
            'startDate|1': "@date",
            'sex|1': ['男 ', '女 '],
            "age|18-28": 18,
        }]
    }
    // 要修改数据的请求
Mock.mock('modify/news/index', 'post', modifyData);

// 第一种方法
// export default Mock.mock('http://www.test.com', {
//     // 当前50条数据已经足够
//     "studentInfo|50": [{
//         // 'studentId|+1': 2,
//         'studentId|001-100': 9,
//         // 'startDate|1': Random.date(),
//         'startDate|1': "@date",
//         'sex|1': ['男 ', '女 '],
//         "age|18-28": 18,
//     }]
// });

// Mock.setup({
//     timeout: 200
// })
// 第二种方法
// mock一组数据
// const produceNewsData = function() 
// {
//     let articles = [];
//             title: Random.csentence(5, 30), //  Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
// }
//         articles.push(newArticleObject)
//     }

//     return {
//         articles: articles
//     }
// }

// Mock.mock( url, post/get , 返回的数据)；