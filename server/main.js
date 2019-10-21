const query = require('./pool'),
    Koa = require('koa'),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),
    koaBody = require('koa-body'),
    Multiparty = require('multiparty'),
	Uuid = require('node-uuid'),
	moment = require('moment');



let http = require("http");

const app = new Koa();

router.post('/regular/list', async (ctx) => {
    let res = [];
    let selectStr = `select * from regular_list`;
    res = await query(selectStr)
    ctx.response.body = { status: 200, msg: '', data: res};
});

router.post('/regular/create',async (ctx) => {
    let params = ctx.request.body;
    let isExistItem = await query(`select uuid from regular_list where name = ? or expression = ?`,[params.name,params.expression]);
    if(isExistItem && isExistItem.length){
        ctx.response.body = { status: 0, msg: '正则表达式匹配目的或者表达式重复,请用名称搜索使用', data: null};
        return;
    }
	let uuid = Uuid.v1();
	let createtime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
	let label = params.labels.join(",");
	let insertStr = `insert into regular_list values(?,?,?,?,?,?,?,?)`;
	res = await query(insertStr,[uuid,params.name,params.expression,params.test,params.type,label,createtime,params.creater]);
	ctx.response.body = { status: 200, msg: '创建正则表达式成功', data: null};
})


// app.use(bodyParser());
app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
        maxFieldsSize: 2 * 1024 * 1024, // 最大文件为2兆
        multipart: true // 是否支持 multipart-formdate 的表单
    }
}));

app.use(router.routes());

app.use(router.allowedMethods());

http.createServer(app.callback()).listen(4001);

