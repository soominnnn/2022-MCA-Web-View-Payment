function payProcess(){
  const CARD_NUMBER = document.getElementById('CARD_NUMBER').value;
  const CARD_DATE = document.getElementById('CARD_DATE').value;
  const CARD_CVC = document.getElementById('CARD_CVC').value;
  const CARD_PASS = document.getElementById('CARD_PASS').value;

  const NUMBER_CONDITION = CARD_NUMBER === '1365';
  const DATE_CONDITION = CARD_DATE === '06';
  const CVC_CONDITION = CARD_CVC === '365';
  const PASS_CONDITION = CARD_PASS === '1111';

  if (CARD_NUMBER === ''){
    alert('카드 번호를 입력해주세요');
    return false;
  }
  if (CARD_DATE === ''){
    alert('유효 기간을 입력해주세요');
    return false;
  }
  if (CARD_CVC === ''){
    alert('CVC 번호를 입력해주세요');
    return false;
  }
  if (CARD_PASS === ''){
    alert('비밀번호를 입력해주세요');
    return false;
  }
  if (NUMBER_CONDITION && DATE_CONDITION && CVC_CONDITION && PASS_CONDITION)
  {
    alert('결제 되었습니다');
    webViewProcess();
  }else {
    alert('정보를 다시 확인해주세요.');
  }
}

function webViewProcess(){
  const DATA = '1';
  firebase.database().ref('vible').set({vible:DATA});
}