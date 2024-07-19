document.addEventListener("DOMContentLoaded", function() {

  fetch('../files/values.json')
    .then(response => response.json())
    .then(data => {
      // 檢查URL，如有卡片的id則顯示
      let urlParams = new URLSearchParams(window.location.search);
      
      let values = data;
      if (urlParams.get("ver") == "v1"){
        values = values.filter((value)=>value.id.startsWith('w'));
      }else{
        values = values.filter((value)=> value.id.startsWith('l'));
      }

      for (let i = 0; i < values.length; i ++){
        let value = values[i];

        const checkboxContainer = document.getElementById('checkboxContainer');
        const div = document.createElement('div');
        div.className = 'checkboxShell';
        checkboxContainer.appendChild(div);
        const checkboxShell = checkboxContainer.lastChild;
        
        // 生成checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className ='checkbox';
        checkbox.id = `${value.id}`;
        checkbox.name = value.id;
        
        checkbox.onchange = () => {
          let checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
          document.getElementById('selectCounter').innerHTML = `您目前選擇的卡片張數為：${checkedCheckboxes.length} 張`;
        }
        // 生成label
        const label = document.createElement('label');
        label.htmlFor = `${value.id}`;
        label.appendChild(document.createTextNode(value.name));
        
        // 將checkbox和label添加到容器中
        checkboxShell.appendChild(checkbox);
        checkboxShell.appendChild(label);
      }
    })
    .catch(error => console.error('Error loading JSON:', error));
});