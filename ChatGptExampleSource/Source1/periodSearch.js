document.addEventListener('DOMContentLoaded', function() {
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const searchResultsDiv = document.getElementById('search-results');

  // 이벤트 리스너 추가
  document.getElementById('3-months-btn').addEventListener('click', function() {
    setDatesByDuration(3);
    
  });

  document.getElementById('6-months-btn').addEventListener('click', function() {
    setDatesByDuration(6);
    
  });

  document.getElementById('12-months-btn').addEventListener('click', function() {
    setDatesByDuration(12);
    
  });


  // 기간에 따라 날짜 설정하는 함수
  function setDatesByDuration(months) {
    const currentDate = new Date();

    const startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - months);

    startDateInput.value = formatDate(startDate); 
    endDateInput.value = formatDate(currentDate);

    // 검색 결과 표시
    searchResultsDiv.innerHTML = `기간: ${startDate.toISOString().split('T')[0]} ~ ${currentDate.toISOString().split('T')[0]}`;
  }

  // 날짜를 yyyy-mm-dd 형식으로 변환하는 함수
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
});