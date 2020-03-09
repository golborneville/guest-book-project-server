# 방명록 프로젝트 - 서버

# API 명세서

- 업데이트 일자 : 2020.03.06



### 게시글 작성

-------------------------

`POST /v1/notepad/`

###### Request

| KEY       | DESCRIPTION     | VALUE  | OPTIONAL |
| --------- | --------------- | ------ | -------- |
| title     | 제목            | String | 필수     |
| password  | 비밀번호        | String | 필수     |
| writer    | 작성자          | String | 필수     |
| noteWrite | 방명록 본문내용 | String | 필수     |


###### Response

`201 CREATED`

``` JSON
{
	"title": "num4",
	"password": "1241pw",
	"noteWrite": "this is an example",
	"writer": "user104"
}
```


### 게시글 수정

------

`PUT /v1/notepad/{id}`

###### Request

| KEY       | VALUE  | DESCRIPTION |  REMARK   |
| --------- | ------ | ----------- | :-------: |
| title     | string | 제목        |     -     |
| password  | string | 비밀번호    | 수정 불가 |
| writer    | string | 작성자      |     -     |
| noteWrite | string | 본문 내용   |     -     |



###### Response

`200 OK`

``` JSON
{
	"title": "num4",
	"password": "1241pw",
	"noteWrite": "this is an example + it's modified!",
	"writer": "user104"
}
```



### 게시글 삭제

-----

`DELETE /v1/notepad/{id}`

* 비밀 번호 입력,  대조 확인 후 삭제 가능

###### Response

`204 No Content`









# DB 테이블 설계

#### TABLE : notepads

| COLUMN    | TYPE             | NULLABLE |     EXTRA      |
| --------- | ---------------- | :------: | :------------: |
| id        | int(10) unsigned |    NO    | auto-increment |
| title     | varchar(255)     |    NO    |       -        |
| password  | varchar(255)     |    NO    |       -        |
| noteWrite | varchar(255)     |    NO    |       -        |
| writer    | varchar(255)     |    NO    |       -        |
| createdAt | datetime         |    NO    |       -        |
| updatedAt | datetime         |    NO    |       -        |

