// 위의문장을80byte 기준으로잘라서배열에담기
// • 한글은2byte, 한글을제외한영어, 숫자, 기호, 띄어쓰기는1byte
// • 자르고난다음글자가공백일경우는생략처리

let str =
"이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고 있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에 대해 알아보고 실제로 도커를 설치하고 컨테이너를 실행해 보도록 하겠습니다.";
let copyStr = str.slice(0);

function SplitToArray (str) {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const notKorean = /[\s|0-9|a-zA-Z]/;
  let score = 0;
  let idx = 0;
  // 문자열을 하나씩의 문자로 뽑아낸 뒤, 그 문자를 정규표현식으로 한글/공백/문자 확인
  for (let i = 0; i < copyStr.length; i++) {
    if ( i == copyStr.length )
      idx = i;
    let tmpChar = copyStr.charAt(i);
    if ( korean.test(tmpChar) === true ) {
      score += 2;
      if(CheckScore(score) == false) {
        score -= 2;
        idx = i;
        break;
      } 
    } else if ( notKorean.test(tmpChar) === true ) {
      score += 1;
      if(CheckScore(score) == false) {
        score -= 1;
        idx = i;
        break;
      } 
    }


    copyStr = copyStr.replace(tmpChar, "*"); //확인한 문자는 *로 치환해서 다시 검사 안하게함
  }
  console.log(idx);
  return idx;
}

function CheckScore(sc) {
  if(sc > 80)
    return false;
  else 
    return true;
}

let idxStorage = [];
for (let j = 0; j < copyStr.length; j++) {
  let tmpChar = copyStr.charAt(j);
  if ( tmpChar === '*' ) 
    continue;
  else 
    idxStorage.push(SplitToArray(copyStr));
}
console.log(idxStorage);

let result = [];
let prev = 0;
for (let i = 0; i <idxStorage.length; i++) {
  result[i] = str.slice(prev, idxStorage[i]).trim();
  prev = idxStorage[i];
}

console.log(result);