---
title: DevOps
---

# DevOps


### 简介

[什么是DevOps](https://zh.wikipedia.org/wiki/DevOps)

::: warning 提醒
这里仅仅是讲自动化部署，并没有涉及到自动化测试
:::

### 方案选择

使用自动化部署首先我们要来选择工具，现有的有`GitHub action`、 `travis CI`、`Gitlab-Ci`、`jenkins` ，笔者将会使用`gitea + Docker + Jenkins`进行演示自动化部署，实现开发者只需要提交代码，部署让工具来完成。

### 开始

> 请自行查阅相关资料进行安装，在安装前先确定服务器上是否已经安装过了

1. 安装Docker
2. 安装Docker-compose
3. 安装gitea
4. 安装Jenkins

