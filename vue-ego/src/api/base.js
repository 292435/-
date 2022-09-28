/**
 * 接口路径配置：
 * 一般文件目录：base.js  index.js 
 * 但是公司不一定
 *      config
 *          login  index.js config.js 
 *       index.js 
 *       xxxx.js 
 */

const base ={
    host:'http://localhost:8989',//基础域名
    goodsList:'/api/api/projectList', //商品列表
    search:'/api/api/search',//商品搜索
    selectCategory:'/api/api/backend/itemCategory/selectItemCategoryByParentId',//类目选择
    uploadUrl:'/api/api/upload',//图片上传 post请求
    addGoods:'/api/api/backend/item/insertTbItem',//添加商品
    deleteGoods:'/api/api/backend/item/deleteItemById',//删除商品
    updateGoods:'/api/api/backend/item/updateTbItem',//编辑商品
    login:'/api/api/login',//登录接口
    params:'/api/api/backend/itemParam/selectItemParamAll',//规格参数列表
    statistical:'/api/api/statistical',//统计数据
    sellTotal:"/api/api/sellTotal",//统计数据
    orderList:"/api/api/order-list",//订单列表
    insertItemParam:"/api/api/backend/itemParam/insertItemParam",//规格参数配置-添加
    categoryData:"/api/api/category/data",//规格参数配置
}

export default base;
