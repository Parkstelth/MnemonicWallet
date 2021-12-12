# MnemonicWallet

기존에 작성했던 니모닉 지갑생성 코드를 굳이 두개의 url-path로 나눌 필요없이 최종적으로 키스토어 파일 생성되도록 구현하였다.

1. npm run start로 서버를 열 수 있다.

2. http://localhost:3000/wallet/newWallet 으로 body를 mnemonic : 임시문자 password : 지갑 패스워드를 POST 메소드로 날린다.

3. 로컬에 자동으로 keystore(지갑주소).json으로 키스토어 파일이 저장된다.
