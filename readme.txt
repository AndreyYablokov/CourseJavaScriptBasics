Задание 1. Выполнено.
1.1. Добавил проверку того, чтобы еда не появлялась на змейке.
1.2. Добавил очистку доски, чтобы при повторном нажатии на кнопку "Начать" не появлялись дополнительные 400 ячеек.
1.3. Добавить выход из игры: когда змейка врезается сама в себя, когда пользователь нажимает на кнопку "Сдаться".
1.4. Добавил паузу.
1.5. Добавил подсчет очков, при съеденном яблоке.

Задание 2. Выполнено.
2.1. Научил змейку двигаться самой в заданном направлении при помощи рекурсивного вызова setTimeout. 
Реализовал изменение скорости змейки при съеденном яблоке.
2.2. Дополнил код функций кнопок "Старт", "Сдаться" и "Пауза", чтобы выполнялись следующие условия:
-не возможно было стартовать несколько раз подряд нажимая кнопку "Старт";
-не возможно было сдаться если игра на паузе;
-не возможно поставить игру на паузу, если игрок сдался.

Задание 3. Выполнено.
3.1. Предлагаю более эффективный метод поиска клетки по координатам (без использования querySelector):
const cell = cells[coordinate.top * config.size + coordinate.left];
вместо
const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
Примечание. cells мы получили в самом начале метода renderItems.
3.2. Переписал условие невозможности движения в противоположном направлении в одну строчку:
        if (this.direction / direction === -1) {
            return
        };
вместо
if (this.direction === SNAKE_DIRECTION_UP && direction === SNAKE_DIRECTION_DOWN
            || this.direction === SNAKE_DIRECTION_DOWN && direction === SNAKE_DIRECTION_UP
            || this.direction === SNAKE_DIRECTION_LEFT && direction === SNAKE_DIRECTION_RIGHT
            || this.direction === SNAKE_DIRECTION_RIGHT && direction === SNAKE_DIRECTION_LEFT) {
            return;
        }
Примечание. Понятность кода стала вероятно сложнее. Добился сокращения условия путем замены значений направлений движения на:
const SNAKE_DIRECTION_UP = 1;
const SNAKE_DIRECTION_DOWN = -1;
const SNAKE_DIRECTION_LEFT = 2;
const SNAKE_DIRECTION_RIGHT = -2;

