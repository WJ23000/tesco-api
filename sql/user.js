/**
 * 说明
 * @params 通用mysql语句封装
 */


// 查询所有用户信息
// 示例：tableName => user
const QUERY_ALL_GENERAL = (tableName) => `SELECT * FROM ${tableName}`;


// 查询指定用户信息
// 示例：paramKey => id,  paramVal => 5
const QUERY_GENERAL = (tableName, judgeKey, judgeVal) => `SELECT * FROM ${tableName} WHERE(${judgeKey}=${judgeVal})`;


// 模糊查询指定条件数据
const QUERY_LIKE_GENERAL = (tableName, judgeKey, judgeVal, likeVal) => `SELECT * FROM ${tableName} WHERE(${judgeKey}=${judgeVal}) like '%${likeVal}%'`;


// 插入一条数据
// 示例：paramKey => [user_name,sex],  paramVal => [小黑，18]
const INSERT_GENERAL = (tableName, paramKey, paramVal) => `INSERT INTO ${tableName}(${paramKey}) VALUES (${paramVal})`;


// 插入多条数据
const INSERT_ROWS_GENERAL = (tableName, {paramKey, paramVal}) => `INSERT INTO ${tableName}(${paramKey}) VALUES (${paramVal})`;


// 更新一条指定条件数据
const UPDATE_GENERAL = (tableName, {judgeKey, judgeVal}, {paramKey, paramVal}) => `UPDATE ${tableName} SET ${paramKey}=${paramVal} WHERE(${judgeKey}=${judgeVal})`;


// 更新多条指定条件数据
const UPDATE_ROWS_GENERAL = (tableName, {judgeKey, judgeVal}, {paramKey, paramVal}) => `UPDATE ${tableName} SET ${paramKey}=${paramVal} WHERE(${judgeKey}=${judgeVal})`;


// 删除一条数据
const DELETE_GENERAL = (tableName, judgeKey, judgeVal) => `DELETE FROM ${tableName} WHERE(${judgeKey}=${judgeVal})`;


// 删除多条数据
const DELETE_ROWS_GENERAL = (tableName, judgeKey, judgeVal) => `DELETE FROM ${tableName} WHERE(${judgeKey}=${judgeVal})`;




module.exports = {
    QUERY_ALL_GENERAL,
    QUERY_GENERAL,
    QUERY_LIKE_GENERAL,
    INSERT_GENERAL,
    INSERT_ROWS_GENERAL,
    UPDATE_GENERAL,
    UPDATE_ROWS_GENERAL,
    DELETE_GENERAL,
    DELETE_ROWS_GENERAL
}