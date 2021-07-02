---
title: 项目搭建
---
## 项目搭建

### 方式一
通过[`HBuilderX`](https://www.dcloud.io/hbuilderx.html) 可视化界面生成 [传送门](https://uniapp.dcloud.io/quickstart-hx?id=%e5%88%9b%e5%bb%bauni-app)

### 方式二

通过 `vue-cli` 命令行 [传送门](https://uniapp.dcloud.io/quickstart-cli)
使用正式版

```shell
vue create -p dcloudio/uni-preset-vue my-project
```
使用alpha版
```shell
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

### 对比

|       | 可视化界面                                                   | cli脚手架                                                    |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 优点. | 1. 方便，傻瓜式操作<br />2. 不用每次关注正式版/alpha，因为你的工具是哪个版本创建出来的就是哪个版本<br />3. 运行时工具会自动启动模拟器（某些情况会启动失败）<br />4. 编译是使用工具集成插件：sass、sass-loader | 1. 可定制性更强<br />2. 可以集成[脚本]()进行自动化           |
| 缺点  | 1. 无法使用自动化部署(下面有个设想方案)                      | 1. 创建的时候需要加入参数控制创建版本<br />2. 目录结构没有工具生成那么直白，但是是传统的vue-cli工程结构<br />3. 不能自动打开模拟器（使用脚本解决）<br />4. 会将所有东西集成到依赖中，第一次开发需要进行安装依赖，尤其是sass、sass-loader, 这两个如果项目中使用sass是要自己安装的 |

### 总结

#### 尝试解决缺点

- 上面提到的可视化界面创建的项目无法使用自动化部署

  思路：初步设想方案是可以在项目中使用命令启动项目

  1. 使用你喜欢的包管理器进行初始化

  ```shell
  # 初始化 包管理
  yarn init # npm init
  ```
  2. 在 `package.json` 中添加一些`scripts`
    ```json
  {
    "scripts": {
         "dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
       }
     }
    ```
   3. 启动脚本

   这里只要你启动成功了，那么说明这个方案是可行的，但是研究了一下，在工具创建的项目它依赖的环境都是工具集成的，所以直接运行应该是找不到依赖，实验没有继续下去，有兴趣的朋友可以尝试一下，但是我认为这个应该是不行的 手动滑稽.jpg

- cli创建的项目无法自动打开模拟器

  思路：使用模拟器的[命令行工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html)来解决，这里使用`shelljs`编写脚本

  1. 安装依赖
  
     ```shell
     npm install shell fs
     ```
  
     
  
  2. 在`src`下创建`shell.js`
  
     ```javascript
     // shell.js 这是一个js文件，使用shelljs来执行shell
     const shell = require('shelljs');
     const fs = require('fs');
     const BLUE_COLOR = "\033[36m"
     const RED_COLOR = "\033[31m"
     const GREEN_COLOR = "\033[32m"
     const VIOLET_COLOR = "\033[35m"
     const line = `# ######################################################################`
     const RES = "\033[0m"
     const args = require('minimist')(process.argv.slice(2)) // 获取命令行脚本执行参数
     const darwinCliPath = "/Applications/wechatwebdevtools.app/Contents/MacOS/cli" // macOS系统开发者工具位置
     const winCliPath = "xxxx" # windows系统开发者工具位置
     let path = {
       devPath: `${process.cwd()}/dist/dev/mp-weixin`, // 获取开发环境下的打包目录
       prodPath: `${process.cwd()}/dist/build/mp-weixin` // 获取生产环境下的打包目录
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
     /**
     * 脚本主方法
     */
     function main() {
       lineEcho(GREEN_COLOR)
       shell.echo(`${BLUE_COLOR}#                       Uni-app build Script                       #${RES}`)
       lineEcho(GREEN_COLOR)
       const env = args['env']
       checkPlatform()
       build(env)
     }
     /**
     * 打开模拟器
     */
     function openCli() {
       shell.exec(`${cliPath} open`)
     }
     /**
     * 开发项目
     */
     function openProject(path) {
       openCli()
       shell.exec(`${cliPath} open --project ${path}`)
     }
     /**
     * 进行构建
     */
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
               shell.exec('yarn dev:mp-weixin-no-watch');
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
     /**
     * 打包直接上传体验版
     */
     function upload() {
       lineEcho(GREEN_COLOR)
       shell.echo(`${VIOLET_COLOR}#                       打包发布体验版微信小程序                       #${RES}`);
       lineEcho(GREEN_COLOR)
       try {
         const versionConfig = JSON.parse(fs.readFileSync('./src/version.json', 'utf8'))
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
       }
     }
     
     main()
     ```
  
     
  
  3. 在 `package.json` 中添加`scripts`
  
     ```json
     {
     	  "dev:shell": "node ./src/shell.js --env=dev",
         "build:shell": "node ./src/shell.js --env=prod",
         "prod:upload": "node ./src/shell.js --env=upload",
         "build-upload": "node ./src/shell.js --env=upload",
         "dev:mp-weixin-no-watch": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build",
     }
     ```
  
  4. 如果你需要避免看到模拟器，然后直接生产上传体验版，添加`/src/version.json`
  
        ```json
        {
          "version": "版本号",
          "author": "我是谁",
          "description": "我做了什么"
        }
        ```
        
        
        
  5. enjoy it！
  
        | script       | 作用                                                         |
        | ------------ | ------------------------------------------------------------ |
        | dev:shell    | 进行开发构建并使用微信开发工具打开                           |
        | build:shell  | 进行生产构建并使用微信开发工具打开                           |
        | build-upload | 进行生产构建直接读取`/src/version.json`文件注入上传信息，上传体验版 |
  
     

两种创建的方式各有优缺点，但也是有方案可以解决的。但是我个人来说更加喜欢使用`vue-cli`来创建项目，使用shell来辅助（微信开发者工具是不是会抽风卡住不懂，使用脚本进行发版效率显著提高）

