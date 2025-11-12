"use strict";

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this._state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const foundBook = this.books.find(book => book[type] === value);
    return foundBook || null;
  }

  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex === -1) {
      return null;
    }
    const book = this.books[bookIndex];
    this.books.splice(bookIndex, 1);
    return book;
  }
}

console.log("ТЕСТОВЫЙ СЦЕНАРИЙ РАБОТЫ БИБЛИОТЕКИ\n");

const library = new Library("Библиотека имени Ленина");
console.log(`Создана библиотека: ${library.name}`);

console.log("\nДобавляем книги в библиотеку:");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);

library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(`Количество книг в библиотеке: ${library.books.length}`);


console.log("\nПоиск книги 1919 года издания:");
const book1919 = library.findBookBy("releaseDate", 1919);

if (book1919) {
  console.log(`Книга найдена: ${book1919.name}`);
} else {
  console.log("Книга 1919 года не найдена. Создаём новую книгу...");
  const newBook = new Book("Неизвестный автор", "Забытая история", 1919, 250);
  library.addBook(newBook);
  console.log(`Добавлена новая книга: ${newBook.name} (${newBook.releaseDate})`);
}

console.log(`Текущее количество книг: ${library.books.length}`);

console.log("\nВыдача книги 'Машина времени':");
const takenBook = library.giveBookByName("Машина времени");


if (takenBook) {
  console.log(`Выдана книга: ${takenBook.name}`);
  console.log(`Осталось книг в библиотеке: ${library.books.length}`);
} else {
  console.log("Книга не найдена!");
}

console.log("\nПовреждаем выданную книгу (снижаем состояние до 30):");
takenBook.state = 30;
console.log(`Состояние книги после повреждения: ${takenBook.state}`);
console.log("\nВосстанавливаем книгу методом fix():");
takenBook.fix();
console.log(`Состояние книги после восстановления: ${takenBook.state}`);


console.log("\nПытаемся вернуть восстановленную книгу в библиотеку:");
library.addBook(takenBook);
if (library.findBookBy("name", "Машина времени")) {
  console.log("Книга успешно возвращена в библиотеку!");
} else {
  console.log("Книгу не удалось вернуть (состояние <= 30)");
}

console.log(`Итоговое количество книг в библиотеке: ${library.books.length}`);

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!(subject in this.marks)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!(subject in this.marks) || this.marks[subject].length === 0) {
      return 0;
    }
    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);
    return totalAverage / subjects.length;
  }
}

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");

console.log(student.getAverageBySubject("физика"));
console.log(student.getAverageBySubject("биология"));
console.log(student.getAverage());
