document.addEventListener("DOMContentLoaded", function() {
    let urlParams = new URLSearchParams(window.location.search);
    
    // 根據頁數顯示指導
    let instruction = (urlParams.get('ver') == 'v1')? "請選擇10張最符合您對於工作的價值觀卡牌。":"請選擇10張最符合您的人生價值觀的卡牌。";

    document.getElementById('instruction').innerHTML = instruction;
});