# mongo-panda
	
	你可以采用`swagger`来学习mongoose的api
	也可以直接在url输入参数来学习


## Requirements 要求

- node engine > 6.3.0

- mongodb installation


## Usgae 使用

```bash

	yarn(或者cnpm) install --verbose

	# start mongo
	mkdir -p ~/data/db
	sh ./db.sh

	# start project
	npm start

```	

## Easy architecture简单的目录结构

```bash

	|- index.js [http入口]
	|
	|- mocker[文件夹]
	|- |- query.js [查询]
	|- |- update.js [更新]
	|- |- save.js [保存]
	|- |- remove.js [删除]
	|
	|- model[数据模型]
	|- |- index.js [schema + model]

```


## Reference 参考文档

### mongo 官方 links

mongo及shell概述

[start](./doc/start.md)

[index索引优化](https://docs.mongodb.com/manual/tutorial/analyze-query-plan/)

[CRUD](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/)

### mongoose核心文档

[mongoose基础](http://mongoosejs.com/docs/index.html)

[mongoose Promise](http://mongoosejs.com/docs/promises.html)

[mongoose起步guide](http://mongoosejs.com/docs/guide.html)

[monoose数据模型](http://mongoosejs.com/docs/models.html)

[monoose数据schema](http://mongoosejs.com/docs/schematypes.html)

[monoose增删改查](http://mongoosejs.com/docs/schematypes.html)

	- [save](http://mongoosejs.com/docs/api.html#model_Model-save)

	- [query](http://mongoosejs.com/docs/queries.html)

	- [update](http://mongoosejs.com/docs/api.html#model_Model.update)

	- [remove](http://mongoosejs.com/docs/api.html#model_Model.remove)


