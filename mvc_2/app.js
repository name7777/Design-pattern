const express = require('express');
//const bodyparser = require('bodyparser'); // express에 포함
const app = express();
const path = require('path');
const litecoinapi = require("./routes/litecoinapi.js");
const mingyeongcoinapi = require('./routes/mingyeongcoinapi');


app.use("/api", litecoinapi); //router use : "/api"라는 경로부터는 litecoinapi파일을 참고한다
app.use("/mgapi",mingyeongcoinapi); //router use : "/mapi"라는 경로부터는 mingyeongcoinapi파일을 참고한다


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
    res.send("index페이지 입니다.")
})

app.post("/getnewaddress"  /* app.get /getnewaddress/id?myid */, (req, res)=>{
    let getid = req.body.id; 
    // let address = 함수실행 > 컨트롤러 > SW실행 > 결과값을 address에 담아준다.
    res.send("result", {walletaddress: address})
})

app.post("/getblockcount", (req, res)=>{
    res.send("getblockcount")
})

app.post("/generatetoaddress", (req, res)=>{
    let amount = req.body.amount;
    let walleaddress = req.body.address;
    
    res.send("result", {result: false})
})

//const host = "127.0.0.1" //구름에서 제공하는 DNS "https://nodejsusing.run.goorm.io";
const port = 3000;
app.listen( /*host,*/ port, ()=>{
    console.log(`Application is running >> "https://nodejs-test.run.goorm.io"`)
})
