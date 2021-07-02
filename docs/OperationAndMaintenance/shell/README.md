---
title: SHELL
---

# 整理常用的脚本
> 整理常用的脚本

### nodejs
1. 判断文件夹是否存在
```js
const fs = require('fs');
const filePath="文件/目录路径"
fs.exists(filePath, function (exists) {
  if (exists) {
    // 文件/目录存在
  }
  if (!exists) {
    // 文件/目录不存在
  }
})
```

```js
const shell = require('shelljs');
const fs = require('fs');
const BLUE_COLOR = "\033[36m"
const RED_COLOR = "\033[31m"
const GREEN_COLOR = "\033[32m"
const VIOLET_COLOR = "\033[35m"
const line = `# ######################################################################`
const RES = "\033[0m"
const args = require('minimist')(process.argv.slice(2))
const darwinCliPath = "/Applications/wechatwebdevtools.app/Contents/MacOS/cli"
const ChatBot = require('dingtalk-robot-sender');
const versionConfig = JSON.parse(fs.readFileSync('./src/version.json', 'utf8'))


let path = {
  devPath: `${process.cwd()}/dist/dev/mp-weixin`,
  prodPath: `${process.cwd()}/dist/build/mp-weixin`
}
let cliPath = ''
/**
 * 检测系统平台
 */
function checkPlatform() {
  if (process.platform == "Linux" || process.platform == 'darwin') {
    cliPath = darwinCliPath
  } else {
    cliPath = darwinCliPath
  }
}

function main() {
  lineEcho(GREEN_COLOR)
  shell.echo(`${BLUE_COLOR}#                       Uni-app build Script                       #${RES}`)
  lineEcho(GREEN_COLOR)
  const env = args['env']
  const notice = args['notice'] || false
  checkPlatform()
  build(env)
  if (notice) {
    sendNotice()
  }
}

function openCli() {
  shell.exec(`${cliPath} open`)
}

function openProject(path) {
  openCli()
  shell.exec(`${cliPath} open --project ${path}`)
}

function build(env) {
  shell.echo(`${BLUE_COLOR}#                       当前构建环境是${env}                        #${RES}`)
  let realPath = path[`${env}Path`]
  switch (env) {
    case 'dev':
      fs.exists(realPath, function (exists) {
        if (exists) {
          shell.echo(`${VIOLET_COLOR}#                       正在开发构建                       #${RES}`);
          openProject(realPath)
          shell.exec('yarn dev:mp-weixin');
        }
        if (!exists) {
          shell.echo(`${VIOLET_COLOR}#                         初次构建                          #${RES}`);
          shell.exec('yarn dev:mp-t');
          openProject(realPath)
          shell.exec('yarn dev:mp-weixin');
        }
      })
      break;
    case 'prod':
      shell.echo(`${VIOLET_COLOR}#                     正在发布小程序，请稍后                       #${RES}`);
      shell.exec('yarn build:mp-weixin');
      openProject(realPath)
      break;
    case 'upload':
      lineEcho(GREEN_COLOR)
      shell.echo(`${VIOLET_COLOR}#                     正在发布小程序，请稍后                       #${RES}`);
      lineEcho(GREEN_COLOR)
      shell.echo(`${VIOLET_COLOR}#                            正在打包                               #${RES}`);
      lineEcho(GREEN_COLOR)
      shell.exec('yarn build:mp-weixin');
      shell.echo(`${VIOLET_COLOR}#                         打包完成                               #${RES}`);
      lineEcho(GREEN_COLOR)
      upload();
      break
    default:
      lineEcho(RED_COLOR)
      shell.echo(`${RED_COLOR}#                       脚本启动失败，请手动编译                       #${RES}`);
      break;
  }
}

function lineEcho(color) {
  shell.echo(`${color}${line}${RES}`);
}

function upload() {
  lineEcho(GREEN_COLOR)
  shell.echo(`${VIOLET_COLOR}#                       打包发布体验版微信小程序                       #${RES}`);
  lineEcho(GREEN_COLOR)
  try {
    lineEcho(GREEN_COLOR)
    console.log('小程序的版本是', versionConfig.version);
    console.log('本次更新内容', versionConfig.description);
    console.log('author', versionConfig.author);
    lineEcho(GREEN_COLOR)
    const {
      version,
      description
    } = versionConfig
    let realPath = path[`prodPath`]
    lineEcho(GREEN_COLOR)
    shell.echo(`${GREEN_COLOR}#                       打包完成，上传中                       #${RES}`);
    shell.exec(` ${cliPath} upload --project ${realPath} -v ${version} -d ${description}`)
    shell.echo(`${GREEN_COLOR}#                       上传完成                       #${RES}`);
    lineEcho(GREEN_COLOR)
  } catch (err) {
    console.error(err)
    sendNotice()
  }

}

function getTime() {
  // 获取当前日期
  var date = new Date();
  // 获取当前月份
  var nowMonth = date.getMonth() + 1;
  // 获取当前是几号
  var strDate = date.getDate();
  // 添加分隔符“-”
  var seperator = "-";
  // 对月份进行处理，1-9月在前面添加一个“0”
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }
  // 对月份进行处理，1-9号在前面添加一个“0”
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
  var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
  return nowDate
}

function sendNotice() {
  // 组合 baseUrl 和 accessToken 如果采用加签方式的安全设置，同时填写secret
  const testRobot = new ChatBot({
    baseUrl: 'https://oapi.dingtalk.com/robot/send',
    accessToken: 'f89e1a74c070e6f709e3e93c69d286a4ffb6e60475c17a4cc5a940436e388452',
    secret: 'SECde749889d6c34527f274bdbbecea55c552829d86dea5a2056d03574b80b1cf3c',
  });

  const robot = new ChatBot({
    baseUrl: 'https://oapi.dingtalk.com/robot/send',
    accessToken: '44df4b6a600c7015e78e4443273b3792487678cf34e576fbd8d545aff59ec7ab',
    secret: 'SEC214e4a9b3d8541be64b48523969b95f088868ff50a25bbf47dcc39712158ee49',
  });


  let title = `SaaS小程序更新`;
  let text = "### SaaS小程序更新\n" +
    "#### Bug修复\n" +
    "1.修复部分页面跳转参数丢失\n\n" +
    "2.修复药融易小程序登陆拦截\n\n" +
    "2.修复药融易小程序新用户进入店铺异常\n\n" +
    "#### 优化\n" +
    "1.优化首页骨架屏\n\n" +
    "2.更换tabBar、我的页面icon\n\n" +
    "3.优化分类搜索栏\n\n" +
    "#### 发布状态：已发布（药融易）体验版(生产版本)\n\n" +
    "发布时间: " + getTime() + "\n\n" +
    "@13924387832@13433356373";
  let at = {
    "atMobiles": [
      "13433356373",
      "13924387832"
    ],
    "isAtAll": false
  };
  lineEcho(GREEN_COLOR)
  shell.echo(`${GREEN_COLOR}#                       消息推送中                       #${RES}`);
  robot.markdown(title, text, at).then(res => {
    shell.echo(`${GREEN_COLOR}`)
    console.log(`===>消息推送结果:`, res);
    shell.echo(`${GREEN_COLOR}#                       本次发布完成                       #${RES}`);
    lineEcho(GREEN_COLOR)
  });
}

main()

```
