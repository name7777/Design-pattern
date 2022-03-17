const express = require("express");
const router = express.Router(); //Router 대문자입니다 express모듈 내에서는 대문자 함수에요

const controller = require("../presenter/controller") //controller 모듈 실행하려고 참조

router.get("/", (req, res) => { //router.get입니다
 	
    let id = res.cookie.id;
    let result = controller.modifyAddress(id);
    res.send({result:result})
})

module.exports = router;