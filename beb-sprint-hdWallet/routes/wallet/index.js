var express = require('express');
var router = express.Router();
const lightwallet = require("eth-lightwallet");
const fs = require('fs');

// TODO : lightwallet 모듈을 사용하여 랜덤한 니모닉 코드를 얻습니다.
router.post('/newMnemonic', async(req,res) => {

});


// TODO : 니모닉 코드와 패스워드를 이용해 keystore와 address를 생성합니다.
router.post('/newWallet', async(req, res) => {

});

module.exports = router;