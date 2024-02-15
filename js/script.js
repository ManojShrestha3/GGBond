

var slideIndex = 1;
showSlides(slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");

  // 새 인덱스가 슬라이드 범위를 벗어나면 함수 종료
  if (n > slides.length || n < 1) {
    return;
  }

  // 현재 슬라이드를 숨김
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 새 슬라이드 인덱스로 업데이트
  slideIndex = n;
  slides[slideIndex - 1].style.display = "block";
}

// 키보드 이벤트 리스너
document.addEventListener("keydown", function(event) {
  if (event.key === '1') {
    window.location.href = '01.html'; //  키를 누르면 이동

  } else if (event.key === '2') {
    window.location.href = '02.html'; 
    
    } else if (event.key === '3') {
    window.location.href = '03.html'; 
    
    	  } else if (event.key === '4') {
    window.location.href = '04.html'; 
    
    	  } else if (event.key === '5') {
    window.location.href = '05.html'; 
    
       } else if (event.key === '6') {
    window.location.href = '06.html'; 
    
       } else if (event.key === '7') {
    window.location.href = '07.html'; 
    
       } else if (event.key === '8') {
    window.location.href = '08.html'; 
    
      } else if (event.key === '9') {
    window.location.href = '09.html'; 
    
  } else if (event.key === "ArrowLeft") {
    moveSlides(-1); // 왼쪽 화살표 키가 눌렸을 때
  } else if (event.key === "ArrowRight") {
    moveSlides(1); // 오른쪽 화살표 키가 눌렸을 때
  }
  
});



function showEndMessage() {
  var message = document.getElementById("endMessage");
  message.style.display = "block"; // 메시지 표시
  setTimeout(function() {
    message.style.display = "none"; // 1초 후 메시지 숨김
  }, 1000);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {
    showEndMessage(); // 슬라이드의 끝에 도달하면 메시지 표시
    slideIndex = slides.length; // 인덱스를 마지막 슬라이드로 설정
    return;
  } else if (n < 1) {
    showEndMessage(); // 슬라이드의 시작점에 도달하면 메시지 표시
    slideIndex = 1; // 인덱스를 첫 번째 슬라이드로 설정
    return;
  }

  // 현재 슬라이드를 숨김
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // 새 슬라이드 인덱스로 업데이트
  slideIndex = n;
  slides[slideIndex - 1].style.display = "block";
}
