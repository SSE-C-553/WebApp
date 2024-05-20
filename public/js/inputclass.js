document.addEventListener('DOMContentLoaded', (event) => {
    // 科目を追加する関数
    function addSubject(subject) {
      const subjectItem = document.createElement('div');
      subjectItem.textContent = subject;
      subjectItem.draggable = true;
      subjectItem.classList.add('subject-item');
      sortable.appendChild(subjectItem);
    }
  
    // 優先順位付けの枠の要素を取得
    const sortable = document.getElementById('sortable');
  
    // 登録ボタンがクリックされたときの処理
    const registerBtn = document.getElementById('registerBtn');
    registerBtn.addEventListener('click', () => {
      const subjectInput = document.getElementById('subject');
      const subject = subjectInput.value;
      if (subject.trim() !== '') {
        addSubject(subject);
        subjectInput.value = '';
      }
    });
  
    // ドラッグ&ドロップの処理
    sortable.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.textContent);
      event.target.classList.add('dragging');
    });
  
    sortable.addEventListener('dragover', (event) => {
      event.preventDefault();
      const draggingElement = document.querySelector('.dragging');
      const boundingRect = event.target.getBoundingClientRect();
      const offsetY = event.clientY - boundingRect.top;
      const placeAbove = offsetY < boundingRect.height / 2;
      if (placeAbove) {
        event.target.parentNode.insertBefore(draggingElement, event.target);
      } else {
        event.target.parentNode.insertBefore(draggingElement, event.target.nextSibling);
      }
    });
  
    sortable.addEventListener('dragend', (event) => {
      event.target.classList.remove('dragging');
    });
  });
  