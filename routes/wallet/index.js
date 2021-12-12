var express = require("express");
var router = express.Router();
const lightwallet = require("eth-lightwallet");
const fs = require("fs");

router.post("/newWallet", async (req, res) => {
  let mnemonic;
  try {
    mnemonic = lightwallet.keystore.generateRandomSeed();
    let password = req.body.password;

    try {
      lightwallet.keystore.createVault({
          password: password,
          seedPhrase: mnemonic,
          hdPathString: "m/0'/0'/0'",
        },
        function (err, ks) {
          ks.keyFromPassword(password, function (err, pwDerivedKey) {
            ks.generateNewAddress(pwDerivedKey, 1);

            let address = ks.getAddresses().toString();
            let keystore = ks.serialize();

            fs.writeFile(`keystore(${address}).json`, keystore, function (err, data) {
              if (err) {
                res.json({
                  code: 999,
                  message: "파일 생성 실패"
                });
              } else {
                res.json({
                  code: 1,
                  message: `파일 생성 성공 / Wallet Address : ${address}`
                });
              }
            });
          });
        }
      );
    } catch (exception) {
      console.log("NewWallet ==>>>> " + exception);
    }

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;