# transport_util
写给表哥的运输日志app，前端react + antd_mobile，后台服务由express + mongo提供。

# 启动server

- 需先启动mongoDB进程，端口号27017。
- npm install
- npm start
- 生产环境用到pm2作为守护进程的工具 （pm2 start app.js --name [process_name]）

# 启动client

- npm install yarn -g
- yarn && yarn start
- 生产环境请修改fetch.js中的BASE_URL，改为后台服务部署地址

# 预览

- 封面

![thumb](https://thumbnail10.baidupcs.com/thumbnail/9cc5ad02966fdd00eeb4caa48ee99f64?fid=508093137-250528-315827314221458&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Grz9bdE2IhOsNU1DTPlLyQq%2fpT8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2264240596726811721&dp-callid=0&time=1523170800&size=c1280_u800&quality=90&vuk=508093137&ft=image)

- 首页

![home](https://thumbnail10.baidupcs.com/thumbnail/b1a39519dd8fcf51465fbffd8598c3e0?fid=508093137-250528-950069773660594&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-a%2fiUBhttxKknuqES0lHylrn%2bV%2fs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2264240596726811721&dp-callid=0&time=1523170800&size=c1280_u800&quality=90&vuk=508093137&ft=image)

- 查看日志

![log](https://thumbnail10.baidupcs.com/thumbnail/afbaadb80e38cd1a9870d0b9f090e9ac?fid=508093137-250528-213538438600018&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ebiZz4a1zF419PWwvRloUYpvoGI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2264240596726811721&dp-callid=0&time=1523170800&size=c1280_u800&quality=90&vuk=508093137&ft=image)

- 新建记录

![new_record](https://thumbnail10.baidupcs.com/thumbnail/77d6d690b33a642fee1d9d14dee49a16?fid=508093137-250528-1080435681881140&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jCRj8AIv3Aeod3q5Hd0dKEdNBDc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2264240596726811721&dp-callid=0&time=1523170800&size=c1280_u800&quality=90&vuk=508093137&ft=image)

