const router = require("koa-router")();
const { query } = require("../utils/query");
const { queryResult, updateResult } = require("../utils/message");
const {
  QUERY_ALL_GENERAL,
  QUERY_GENERAL,
  INSERT_GENERAL,
  UPDATE_GENERAL,
  DELETE_GENERAL
} = require("../sql/user");

router.prefix("/users");

// 查询所有用户信息(get方式)
router.get("/", async (ctx, next) => {
  let result = await query(QUERY_ALL_GENERAL("user"));
  if (result.length > 0) {
    ctx.body = queryResult(result);
  } else {
    ctx.body = updateResult("暂无数据");
  }
});


// 根据用户id插指定用户信息(get方式)
router.get("/query", async (ctx, next) => {
  // 接收传入的参数
  let id = ctx.query.id;
  let result = await query(QUERY_GENERAL("user", "id", id));
  if (result.length > 0) {
    ctx.body = queryResult(result);
  } else {
    ctx.body = updateResult("暂无数据");
  }
});


// 插入一个用户(post方式)
router.post("/insert", async (ctx, next) => {
  // 接收传入的参数(数组类型)
  let paramsVal = ctx.request.body;
  let [keys,values] = [[],[]];
  for (let i = 0; i < paramsVal.length; i++) {
    let [data,value] = [paramsVal[i],[]];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (i==0) {
          keys.push(key);
        }
        if (Object.prototype.toString.call(data[key]) == '[object String]') {
          value.push(`"${data[key]}"`)
        }else {
          value.push(data[key])
        }
      }
    }
    values.push(`${value}`);
  }
  console.log("键："+keys,"值："+values);
  // 调用sql插入数据方法
  await query(INSERT_GENERAL("user", keys, values));
  ctx.body = updateResult("插入成功");
});


// 根据用户id更新用户信息(post方式)
router.post("/update", async (ctx, next) => {
  console.log("接收到的值", ctx.query);
  // 接收传入的参数
  let params = {
    id: ctx.query,id,
    user_name: ctx.query.user_name
  }
  await query(UPDATE_GENERAL("user", params));
});


// 根据用户id删除一个用户(get方式)
router.get("/delete", async (ctx, next) => {
  // 接收传入的参数
  let id = ctx.query.id;
  await query(DELETE_GENERAL("user", "id", id));
  ctx.body = updateResult("删除成功");
});


router.get("/example", async (ctx, next) => {
  ctx.body = "this is a example response";
});

module.exports = router;
