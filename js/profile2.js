const tabButtons = document.querySelectorAll('.tab_button');
const tabBoxes = document.querySelectorAll('.tab_box');

for (let i = 0; i < tabButtons.length; i++) {
   tabButtons[i].addEventListener('click', function () {
      tabButtons.forEach(button => button.style.borderColor = ""); // 원래 보더 색상 초기화
      tabButtons[i].style.borderColor = "#2A5137"; 

      tabBoxes.forEach(box => box.classList.remove('active'));
      tabBoxes[i].classList.add('active');
   });
}




//로컬스토리지에서 삭제할 모달창 띄우고 확인 누르면 로컬스토리에서 해당 배열 삭제하기
