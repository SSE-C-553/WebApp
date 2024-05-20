//基礎データ入力ホームの各入力欄のオブジェクトを定数に代入する
const $subject = document.getElementById('subject');
const $subjectTerm = document.getElementById('subjectTerm');
const $subjectTime = document.getElementById('subjectTime');
const $teacher = document.getElementById('teacher');
const $teacherTime = document.getElementById('teacherTime');
const $teacherAffiliation = document.getElementById('teacherAffiliation');
const $classroom = document.getElementById('classroom');
const $classroomHR = document.getElementById('classroomHR');
const dataDisplay = document.getElementById('dataDisplay');

//科目・教員・教室それぞれの登録ボタンのオブジェクトを定数に代入する
const $submitSubject = document.getElementById('submitSubject');
const $submitTeacher = document.getElementById('submitTeacher');
const $submitClassroom = document.getElementById('submitClassroom');

//入力ホームで入力された科目・教員・教室の各データはオブジェクトの配列として保存される
var subjects = []; //[(1,subject,subjectterm),(2,subject,subjectterm),・・・・]
var teachers = []; //[(1,teacher,teacherTime,teacherAffilication),(2,teacher,teacherTime,teacherAffilication),・・・・]
var classrooms = []; //[(1,classroom,classroomHR),(2,classroom,classroomHR),・・・・]

var submitHTML = [];
var teacherHTML = [];
var classroomHTML = [];

//登録ボタンが押されたときに呼び出される関数．
//それぞれ，HTMLファイルから各入力欄に入力された項目をオブジェクトの型に直して配列の先頭に追加される

//すべての削除ボタンについて押されたときの処理を定義する．
function addSubjectDeleteEvent() {
  const deleteButtons = document.querySelectorAll('.delete-subjectButton button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const item = e.target.closest('.data-row');
      const onlyNumbers = e.target.id.replace(/\D/g, "");
      submitHTML.splice(onlyNumbers, 1, '');
      subjects.splice(onlyNumbers, 1, '');
      item.remove();
    });
  });
}

function addTeacherDeleteEvent() {
  const deleteButtons = document.querySelectorAll('.delete-teacherButton button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const item = e.target.closest('.data-row');
      const onlyNumbers = e.target.id.replace(/\D/g, "");
      teacherHTML.splice(onlyNumbers, 1, '');
      teachers.splice(onlyNumbers, 1, '');
      item.remove();
    });
  });
}

function addClassroomDeleteEvent() {
  const deleteButtons = document.querySelectorAll('.delete-classroomButton button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const item = e.target.closest('.data-row');
      const onlyNumbers = e.target.id.replace(/\D/g, "");
      classroomHTML.splice(onlyNumbers, 1, '');
      classrooms.splice(onlyNumbers, 1, '');
      item.remove();
    });
  });
}

//科目の保存ボタンが押されたら
$submitSubject.addEventListener('click', (e) => {
  e.preventDefault(); //これを入れないとボタンを押したときに自動でwebが再読み込みされる
  subjects.push({
    number: subjects.length, subject: $subject.value
    , subjectTime: $subjectTime.value, subjectTerm: $subjectTerm.value
  });
  // 保存されたデータ表示エリアにデータを追加
  submitHTML.push(`
    <div class="border p-3 mb-3 data-row">
      <div>
        <p><strong>科目名:</strong> ${$subject.value}</p>
      </div>
      <div>
        <p><strong>コマ時間数:</strong> ${$subjectTime.value}</p>
      </div>
      <div>
        <p><strong>期間:</strong> ${$subjectTerm.value}</p>
      </div>
      <div class="delete-subjectButton">
        <button class="btn btn-secondary" id="submitDelete`+ submitHTML.length + `">削除</button>
      </div>
    </div>
  `);
  subjectDisplay.innerHTML = '';
  for (var i = 0; i < submitHTML.length; i++) {
    subjectDisplay.innerHTML += submitHTML[i];
  }
  addSubjectDeleteEvent();
});

//教員の保存ボタンが押されたら
$submitTeacher.addEventListener('click', (e) => {
  e.preventDefault();
  teachers.push({
    number: teachers.length, teacher: $teacher.value , teacherAffiliation: $teacherAffiliation.value,
    teacherTime: $teacherTime.value
  });
  // 保存されたデータ表示エリアにデータを追加
  teacherHTML.push(`
    <div class="border p-3 mb-3 data-row">
      <div>
        <p><strong>教員名:</strong> ${$teacher.value}</p>
      </div>
      <div>
        <p><strong>所属:</strong> ${$teacherAffiliation.value}</p>
      </div>
      <div>
        <p><strong>常勤・非常勤:</strong> ${$teacherTime.value}</p>
      </div>
      <div class="delete-teacherButton">
        <button class="btn btn-secondary" id="teacherDelete`+ teacherHTML.length + `">削除</button>
      </div>
    </div>
  `);
  teacherDisplay.innerHTML = '';
  for (var i = 0; i < teacherHTML.length; i++) {
    teacherDisplay.innerHTML += teacherHTML[i];
  }
  addTeacherDeleteEvent();
});

//教室の保存ボタンが押されたら
$submitClassroom.addEventListener('click', (e) => {
  e.preventDefault();
  classrooms.push({
    number: classrooms.length, classroom: $classroom.value,
    classroomHR: $classroomHR.value,
  });
  // 保存されたデータ表示エリアにデータを追加
  classroomHTML.push(`
      <div class="border p-3 mb-3 data-row">
        <div>
          <p><strong>教室名:</strong> ${$classroom.value}</p>
        </div>
        <div>
          <p><strong>使用する教室:</strong> ${$classroomHR.value}</p>
        </div>
        <div class="delete-classroomButton">
          <button class="btn btn-secondary" id="classroomDelete`+ classroomHTML.length + `">削除</button>
        </div>
      </div>
    `);
  classroomDisplay.innerHTML = '';
  for (var i = 0; i < classroomHTML.length; i++) {
    classroomDisplay.innerHTML += classroomHTML[i];
  }
  addClassroomDeleteEvent();
});


//最初の処理
/*
for(let i = 0 ; i < ; i==){
subjects.push({
  number: subjects.length, subject: 
  , subjectTime: , subjectTerm: 
});
// 保存されたデータ表示エリアにデータを追加
submitHTML.push(`
  <div class="border p-3 mb-3 data-row">
    <div>
      <p><strong>科目名:</strong> ${}</p>
    </div>
    <div>
      <p><strong>コマ時間数:</strong> ${}</p>
    </div>
    <div>
      <p><strong>期間:</strong> ${}</p>
    </div>
    <div class="delete-subjectButton">
      <button class="btn btn-secondary" id="submitDelete`+ submitHTML.length + `">削除</button>
    </div>
  </div>
`);
}
subjectDisplay.innerHTML = '';
for (var i = 0; i < submitHTML.length; i++) {
  subjectDisplay.innerHTML += submitHTML[i];
}


for(let i = 0 ; i < ; i==){
  teachers.push({
    number: teachers.length, teacher: ,
    teacherTime: , teacherAffiliation: 
  });
  // 保存されたデータ表示エリアにデータを追加
teacherHTML.push(`
    <div class="border p-3 mb-3 data-row">
      <div>
        <p><strong>教員名:</strong> ${}</p>
      </div>
      <div>
        <p><strong>所属:</strong> ${}</p>
      </div>
      <div>
        <p><strong>常勤・非常勤:</strong> ${}</p>
      </div>
      <div class="delete-teacherButton">
        <button class="btn btn-secondary" id="teacherDelete`+ teacherHTML.length + `">削除</button>
      </div>
    </div>
  `);
}
  teacherDisplay.innerHTML = '';
  for (var i = 0; i < teacherHTML.length; i++) {
    teacherDisplay.innerHTML += teacherHTML[i];
  }

  for(let i = 0 ; i < ; i==){
  classrooms.push({
    number: classrooms.length, classroom: $classroom.value,
    classroomHR: $classroomHR.value,
  });
  // 保存されたデータ表示エリアにデータを追加
  classroomHTML.push(`
      <div class="border p-3 mb-3 data-row">
        <div>
          <p><strong>教室名:</strong> ${$classroom.value}</p>
        </div>
        <div>
          <p><strong>使用する教室:</strong> ${$classroomHR.value}</p>
        </div>
        <div class="delete-classroomButton">
          <button class="btn btn-secondary" id="classroomDelete`+ classroomHTML.length + `">削除</button>
        </div>
      </div>
    `);
}
  classroomDisplay.innerHTML = '';
  for (var i = 0; i < classroomHTML.length; i++) {
    classroomDisplay.innerHTML += classroomHTML[i];
  }
*/

addSubjectDeleteEvent();
addTeacherDeleteEvent();
addClassroomDeleteEvent();