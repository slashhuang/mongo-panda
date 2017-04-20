## mongoDB包常用组件

- mongo

> mongo is an interactive JavaScript shell interface to MongoDB
 which provides a powerful interface for systems administrators 
 as well as a way for developers to test queries and operations 
 directly with the database


 - mongod

 > mongod is the primary daemon process for the MongoDB system. 
 It handles data requests, manages data access, 
 and performs background management operations.

- mongos

> mongos for “MongoDB Shard,” is a routing service for MongoDB shard configurations 
that processes queries from the application layer

[官方shell文档](https://docs.mongodb.com/manual/reference/mongo-shell/)



## mongo基本层级划分

|- db  家 
|- |- collections  房间 书房 仓库
|- |- |- documents  书  吃的
|- |- |- |- Field	每一个章节 黄瓜 + 青菜

## 对比mysql来形象化理解

| MySQL | MongoDB |
| ------| ------ |
| Table | Collection |
| Row | Document |
| Column | Field |
| Joins | Embedded documents, linking |

## 关系型数据库和非关系型数据库


关系模型就是指二维表格模型,因而一个关系型数据库就是由二维表及其之间的联系组成的一个数据组织
数据库的概念设计 Entity-Relationship Diagram


非关系型数据库即NoSQL，抛弃了关系数据库复杂的关系操作、事务处理等功能，
仅提供简单的键值对(Key, Value)数据的存储与查询，换取高扩展性和高性能，
满足论坛、博客、SNS、微博等互联网类应用场景下针对海量数据的简单操作需求。


### mongodb和mysql查询语句对比

```bash
    # MySQL
    INSERT INTO users (user_id, age, status)
    VALUES ('bcd001', 45, 'A')

    # MongoDB
    db.users.insert({
        user_id: 'bcd001',
        age: 45,
        status: 'A'
    })
```  



```bash
    # MySQL 语句 
    SELECT * FROM users 

    # MongoDB  表达式
    db.users.find()

``` 

```bash
    # MySQL @foucs
    UPDATE users SET status = 'C'
    WHERE age > 25

    # MongoDB
    db.users.update(
        { age: { $gt: 25 } },
        { $set: { status: 'C' } },
        { multi: true }
    )

```   

## 数据库层面

### shell方法

[mongo shell api](https://docs.mongodb.com/manual/reference/method/)

[端口号](https://docs.mongodb.com/manual/reference/default-mongodb-port/)






