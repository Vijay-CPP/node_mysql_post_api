# Node MySQL Post API
## Internship Assessment

### Preview
For UID = 4

![Screenshot (380)](https://github.com/Vijay-CPP/node_mysql_post_api/assets/74971365/462346e6-b34a-469f-9255-e9678a4a2364)

Tables used - 

```
Users
+-----+-------+
| uid | name  |
+-----+-------+
|   1 | Geeta |
|   4 | Rahul |
+-----+-------+ 

Candidate
+-----+------+---------------+
| cid | uid  | candidateName |
+-----+------+---------------+
|   1 |    4 | Priyanka      |
|   2 |    4 | Manish        |
|   3 |    4 | Vedant        |
|   4 |    1 | Vijay         |
+-----+------+---------------+

Candidate_Status
+-----+------+-----------+-----------------+
| sid | cid  | status    | statusUpdatedAt |
+-----+------+-----------+-----------------+
|   1 |    1 | joined    | 2023-03-24      |
|   2 |    2 | joined    | 2022-12-12      |
|   3 |    3 | interview | 2023-06-28      |
|   4 |    4 | joined    | 2023-08-01      |
+-----+------+-----------+-----------------+
```

For UID = 1

![Screenshot (381)](https://github.com/Vijay-CPP/node_mysql_post_api/assets/74971365/1fe9293b-cfad-41f5-8f8f-4cbe42fcfe30)

After cloning try
```
npm install
```

then add DB credentials to the .env file and then
```
npm start or npm dev 
```