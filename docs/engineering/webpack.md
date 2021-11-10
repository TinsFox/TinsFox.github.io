---
order: 2
group:
  title: webpack
  order: 1
---

# webpack

## 干啥用的

**打包文件的**

<img src="https://pic.tinsfox.com/uPic/image-20211027154932761.png" alt="image-20211027154932761" style="zoom:50%;" />

## 快速上手

```bash
$ mkdir webpack-demo
$ cd webpack-demo
$ npm init -y
$ yarn add -D webpack webpack-cli
$ touch webpack.config.js
```

修改 `package.json` 中的 `srcipt`

```json
"script":{
  "build":"webpack webpack.config.js"
}

```
