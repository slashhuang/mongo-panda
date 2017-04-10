## mongodb增删改查操作

### API列表

### Insert Documents

> The insertOne and insertMany methods exist on the Collection class and are used to insert documents into MongoDB.

```bash

	insertOne

	insertMany

```


### Updating Documents

> The updateOne and updateMany methods exist on the Collection class and are used to update and upsert documents


参数 : [查询条件,$set等操作动作[,可选参数],回调函数]

```bash

	updateOne

	updateMany

```

### Removing Documents

> The deleteOne and deleteMany methods exist on the Collection class and are used to remove documents from MongoDB.


参数 : [查询条件[,可选参数],回调函数]

```bash

	deleteOne

	deleteMany

```

## 合并操作 findOneAndUpdate, findOneAndDelete, and findOneAndReplace



















