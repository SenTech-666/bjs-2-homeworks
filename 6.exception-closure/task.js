function parseCount(value) {
  const result = Number.parseFloat(value);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    // Проверка существования треугольника: сумма любых двух сторон должна быть больше третьей
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    // Формула Герона: S = √(p * (p - a) * (p - b) * (p - c)), где p — полупериметр
    const p = this.perimeter / 2; // полупериметр
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return parseFloat(area.toFixed(3)); // округление до 3 знаков после запятой
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}
