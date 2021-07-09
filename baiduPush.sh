#!/usr/bin/env sh
###
 # @Author: WangXiaoYuan
 # @Description: 
 # @Date: 2021-02-06 14:58:09
 # @LastEditors: WangXiaoYuan
 # @LastEditTime: 2021-07-02 18:17:20
### 

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://blog.wangxiaoyuan.top&token=OW4WTkHF7NueX0Sw"

rm -rf urls.txt # 删除文件
