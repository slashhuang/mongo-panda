## mongo javascript shell 语法基础

[官方shell文档](https://docs.mongodb.com/manual/reference/mongo-shell/)


## 基本层级划分

|- db  
|- |- collections  
|- |- |- documents


## 数据库层面

### db.stat()

```bash
	{
		"db" : "myDB",
		"collections" : 0,
		"objects" : 0,
		"avgObjSize" : 0,
		"dataSize" : 0,
		"storageSize" : 0,
		"numExtents" : 0,
		"indexes" : 0,
		"indexSize" : 0,
		"fileSize" : 0,
		"ok" : 1
	}
```