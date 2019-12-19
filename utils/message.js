/**
 * 获取当前视频信息
 * @params val      传入的参数
 * @return success  返回状态
 * @return number   数量
 * @return data     [{"name":"视频名字","preImg":"预览图"},..]
 */

// 有数据返回状态
function queryResult (val) {
    return{
        success: 200,
        number: val.length,
        data: val
    }
};

// 操作成功返回状态
function updateResult (text) {
    return{
        success: 200,
        data: text
    }
}

module.exports = {
  queryResult,
  updateResult
};
