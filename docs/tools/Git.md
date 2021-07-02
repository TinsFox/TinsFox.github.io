---
title: Git
---

# Git 常用命令

1. 初始化 git 仓库

   ```bash
   git init
   ```

2. 添加到暂存区

   ```bash
   # 添加所有修改文件
   git add .
   # 添加制定文件
   git add filename
   ```

3. 提交分支

   ```bash
   git commit -m "提交说明"
   ```

4. 忽略代码检查

   ```bash
   git commit --no-verify -m "commit" #就可以跳过代码检查
   ```

5. 修改远程仓库地址

   ```bash
   git remote set-url origin <remote-url>
   ```

6. 删除指定的远程仓库

   ```bash
   git remote rm origin
   ```

