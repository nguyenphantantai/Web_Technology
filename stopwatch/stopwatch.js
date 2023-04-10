let startTime =0; // thời điểm bắt đầu
let elapsedTime =0; // thời gian trôi qua

const display=document.querySelector('.display');// lấy element để hiển thị thời gian
const startBth =document.querySelector('.start');// lấy nút start
const stopBth =document.querySelector('.stop'); // lấy nút stop
const resetBth =document.querySelector('.reset'); // lấy nút reset

function startTimer(){
    startTime = Date.now() - elapsedTime;// lưu thời điểm bắt đầu
    timeInterval = setInterval(updateTimer, 10); // cập nhật thời gian mỗi 10ms
}

function stopTimer(){
    clearInterval(timerInterval); // dừng cập nhật thời gian
}

function resetTimer(){
    stopTimer(); // Dừng thời gian 
    elapsedTime =0; // reset thời gian đã trôi qua 
    display.innerHTML='00:00:00'; // hiển thị lại thời gian ban đầu 
}

function updateTimer(){
    elapsedTime = Date.now() - startTime; //  tính thời gian đã trôi qua 
    let minutes = Math.floor((elapsedTime %(1000*60*60))/ (1000*60)); // tính số phút
    let seconds = Math.floor((elapsedTime %(1000 *60)) / 1000); // tính số giây 
    let milliseconds = Math.floor((elapsedTime % 1000)/10); // tính số mili giây
    minutes=minutes.toString().padStart(2, '0'); // đảm bảo định dạng số có 2 chữ số
    seconds = seconds.toString().padStart(2, '0');
    display.innerHTML = `${minutes}:${seconds}:${milliseconds}`; // hiển thị thời gian lên trang web
}

startBth.addEventListener('click',startTimer); // gắn sự kiện click vào nút start 
stopBth.addEventListener('click',stopTimer); // gắn sự kiện click vào nút stop
resetBth.addEventListener('click',resetTimer); // gắn sự kiện click vào nút reset 