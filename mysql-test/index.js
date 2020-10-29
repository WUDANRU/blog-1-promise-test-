const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

// 执行sql语句
// const sql = 'select * from users;' //单引号
// const sql = 'select id,username from users;'
// const sql = `update users set realname='李四2' where username='lisi'` //反引号

//  node.index.js后cmd显示insertId: 4,这个是id，再添加像下面一样的数据会显示insertId:5
const sql = `insert into blogs(title,content,createtime,author)values('标题D','内容D',1236871704458,'zhangsan')` //添加不需要写id,id是自然显示的

con.query(sql, (err, result) => { //con.query查询
    if (err) {
        console.error(err)
        return
    }
    console.log(result)
})

// 关闭连接
con.end() //连接一直开着，进程是结束不了的