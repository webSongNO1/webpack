const path=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/index.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{loader:'babel-loader'},
                exclude:/node_modules/ //去除文件夹
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true //把标签里的引号去掉了
            },
            hash:true,//清理缓存
            template:"./src/home.html",
            filename:path.resolve(__dirname,'dist/index.html')
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:4399
    }
}