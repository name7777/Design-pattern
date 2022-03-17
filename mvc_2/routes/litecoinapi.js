// routes > litecoinapi.js
const express = require("express"); // Router를 포함하는 모듈
const router = express.Router();  // express의 Router();를 가져온다.

const ctrl = require("../presentor/controller");

router.get("/", (req, res)=>{ // 여기서는 "/"로 보이지만  실제로는 "/api" 이다
    
    res.send({result:result});
})

router.get("/getblockcount", (req, res)=>{ /* ="/api/getblockcount */
    
})


/* Router --> Controller */
router.get("/ctrl/firstmethod", (req, res)=>{
    
})

module.exports = router;//반드시 내보내줘야 사용할수있는 모듈