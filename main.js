

const str = `
010-9768-7777.
dbtjsrjs8282@naver.com
프로즌
https://www.
lorem orro Lorem orrolorem orro.
cavbvvvssc
http://local
vvvvv
동해물과_백두산이 마르고 닳도록
`

//정규표현식 리터럴방식
const regexp = /lorem/gi

const h = `  the hello  world       !

`
console.log(str.match(/.{1,}(?=@)/g))











//g | 모든 문자 일치