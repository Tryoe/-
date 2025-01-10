import request from '@/utils/request'

// http://47.108.197.105:5000/api/v2/get_excavate_plan
// http://202.115.65.7:9500 /get_topic_4_info_verify/
// http://202.115.65.7:9500 /get_topic_4_info/
const api_name ='/api/v2'

export default{
    //获取开挖方法
    getExcavatePlan(){
        return request({
            url: `${api_name}/get_excavate_plan`,
            baseURL:'http://47.108.197.105:5000',
            method: 'get',
        })
    },
    //课题组一调取数据登录,身份鉴权token获取
    info_Verify(userData){
        return request({
            url: `/get_topic_4_info_verify/`,
            baseURL:'http://202.115.65.7:9500',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;'
             },
            data: userData,
            method: 'post'
        })
    },
    //调取隧道工作面名、围岩参数
    get_Info(workData,token,){
        return request({
            url: `/get_topic_4_info/`,
            baseURL:'http://202.115.65.7:9500',
            data: workData,
            headers: {
                'authorization': token
             },
            method: 'post'
        })
    },
    //数据推送接口
    get_Data(workData){
        return request({
            url: `/get_topic_4_data/`,
            baseURL:'http://202.115.65.7:9500',
            data: workData,
            headers: {
                'Authorization': '85A1AC7C1F3430D8'
             },
            method: 'post'
        })
    },
}
