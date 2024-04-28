document.addEventListener('DOMContentLoaded', function() {
    // 科目フォームの作成
    var subjectForm = document.getElementById('subjectForm');
    subjectForm.innerHTML = `
        <h2>科目情報</h2>
        <input type="text" id="subjectName" placeholder="科目名">
        <input type="text" id="class" placeholder="クラス">
        <input type="text" id="teacherName" placeholder="担当教員名">
        <input type="text" id="roomName" placeholder="使用する教室">
        <button onclick="saveSubject()">保存</button>
    `;

    // 教員フォームの作成
    var teacherForm = document.getElementById('teacherForm');
    teacherForm.innerHTML = `
        <h2>教員情報</h2>
        <input type="text" id="teacherName" placeholder="教員名">
        <button onclick="saveTeacher()">保存</button>
    `;

    // 教室フォームの作成
    var roomForm = document.getElementById('roomForm');
    roomForm.innerHTML = `
        <h2>教室情報</h2>
        <input type="text" id="roomName" placeholder="教室名">
        <button onclick="saveRoom()">保存</button>
    `;
});

function saveSubject() {
    var subjectName = document.getElementById('subjectName').value;
    var className = document.getElementById('class').value;
    var teacherName = document.getElementById('teacherName').value;
    var roomName = document.getElementById('roomName').value;
    // ここでデータの保存処理を実行する
    console.log('Saving subject:', subjectName, className, teacherName, roomName);
}

function saveTeacher() {
    var teacherName = document.getElementById('teacherName').value;
    // ここでデータの保存処理を実行する
    console.log('Saving teacher:', teacherName);
}

function saveRoom() {
    var roomName = document.getElementById('roomName').value;
    // ここでデータの保存処理を実行する
    console.log('Saving room:', roomName);
}