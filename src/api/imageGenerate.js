import request from '@/utils/request'

export default {
  //python云图接口
  contourImage(obj){
  return request({
    url: `/get_contour_image`,
    baseURL:'http://212.64.29.33:8888',
    data: obj,
    method: 'post'
  })
},
  get_pic(projectId){
    return request({
      url: `/test`,
      baseURL:'http://212.64.29.33:8888',
      data: projectId,
      method: 'post'
    })
  }
}
