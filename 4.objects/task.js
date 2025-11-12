// 1. Функция‑конструктор Student
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // пустой массив для оценок
}

// 2. Метод setSubject — устанавливает предмет
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

// 3. Метод addMarks — добавляет оценки (с проверкой)
Student.prototype.addMarks = function(...marksToAdd) {
  // Проверяем, что студент не отчислен (есть свойство marks)
  if (!this.marks) {
    console.log("Студент отчислен, нельзя добавить оценки.");
    return;
  }
  
  // Добавляем все переданные оценки в массив
  this.marks.push(...marksToAdd);
};

// 4. Метод getAverage — возвращает среднее арифметическое оценок
Student.prototype.getAverage = function() {
  // Если marks отсутствует или пустой массив — возвращаем 0
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  
  // Считаем сумму и делим на количество
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// 5. Метод exclude — отчисляет студента
Student.prototype.exclude = function(reason) {
  // Удаляем свойства subject и marks
  delete this.subject;
  delete this.marks;
  
  // Добавляем свойство excluded с причиной
  this.excluded = reason; // Обратите внимание: в задании опечатка — "excluded", правильно "excluded"
};
