module.exports = {
    lintOnSave:false,
    publicPath: './',
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/regular': {
                target: 'http://localhost:4001',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true
            }
            
        }
    }
}