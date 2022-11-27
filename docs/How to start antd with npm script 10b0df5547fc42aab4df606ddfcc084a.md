# How to start antd with npm script

Created: August 17, 2022 9:23 PM
Reviewed: No
Type: Getting Start

# antd 源码阅读

## Getting Start

首先研究一下启动项目的脚本，了解项目启动的时候做了写什么事情。可以在`package.json` 里看到启动的命令是 `"start":"antd-tools run clean && cross-env NODE_ENV=development concurrently \"bisheng start -c ./site/bisheng.config.js\""` 。这个命令做了什么事情呢，下面来仔细了解一下。

首先 start 命令分成了两部分，`antd-tools run clean` 和 `cross-env NODE_ENV=development concurrently \"bisheng start -c ./site/bisheng.config.js\"`

## antd-tools run clean

调用 antd-tools 暴露的 `clean` 方法 删除 ant-design文件夹里的 `_site` 和 `_data` 。

执行的方法是 

```jsx
gulp.task('clean', () => {
  rimraf.sync(getProjectPath('_site'));
  rimraf.sync(getProjectPath('_data'));
});
const cwd = process.cwd();

function getProjectPath(...filePath) {
  return path.join(cwd, ...filePath);
}
```

[rimraf](https://www.notion.so/rimraf-07d8fb6af6d746bf9aa1aa6ec7f60151) 

[[process.cwd](https://nodejs.org/api/process.html#processcwd) ](https://www.notion.so/process-cwd-14e56348c8d8437ca89036d7476cde95) 

## `cross-env NODE_ENV=development concurrently \"bisheng start -c ./site/bisheng.config.js\"`

使用 `cross-env` 注入 NODE_ENV 变量为 `development`

使用 `concurrently` 启动 已 `./site/bisheng.config.js` 做为配置启动 `bisheng` 

[`cross-env`](https://www.notion.so/cross-env-7c2e986d42324356a1c388fd838929de) [`concurrently`](https://www.notion.so/concurrently-da40eaa456494bc2bcd7823f9929dbdb)   [bisheng](https://www.notion.so/bisheng-d3d585662d614da999659b439a8af725) 

## prestart

在start启动前，script 会先执行 pre-script 的前置脚本，同理，脚本会存在一个后置脚本 post-script。 

举个例子，start 命令在启动前会先去查找 prestart，如果有则先运行 prestart 再运行start，poststart 则是在start 执行完成之后执行。
