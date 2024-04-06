const express = require('express')
const app = express()
const port=3000
const cors =require('cors')
app.use(cors()); //비워두면 모든 요청에 대해 허용. 괄호안에 조건넣어서
//이상하지 않은곳에서 요청하지 않도록하기/.

app.get('/', function (req, res) {
  res.send('Hello World')
})

// READ
app.get('/dog', function (req, res) {
  res.json({'개':"재패니즈 스피치"})
})
//영상태그도 보낼 수 있음 다 보낼 수 있음.



//GET은 두가지 방법이 있음.
// 1) PARAMS로
// app.get('/user/:id', function (req, res) {
//   const params=req.params;
//   //console.log(params)
//   res.json({'userId':params.id})
// })

//2)query로. 키 밸류로 이루어진 값.
app.get('/user/:id', function (req, res) {
  const query=req.query;
//query에 js문을 통해 흔히 우리가 아는 백엔드 처리를 수행
// 정렬, 계산, 중복 체크,  등등
  console.log(query)
  res.json({"dd":query.nick})
})


app.listen(port,()=>{
  console.log("listen")
})

//POST
//axios, fetch를 이용해 요청. body에 담겨야하는것이 포인트


//CORS 이슈
//모듈 설치로 해결
