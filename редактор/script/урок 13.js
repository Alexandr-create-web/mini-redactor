// 24)Создаем мини-графический редактор, с настройкой вида фигуры.
// Создать в html div с классом block, и с несколько полей ввода для следующих задач:
// ширина и высота блока, цвет, скругление, поворот. Для каждого поля ввода создать кнопку.
// При нажатии кнопки, должны применяться настройки соответствующего инпута и результат отображаться на блоке.
const block = document.getElementById('block');
let currentRotation = 0;

document.querySelectorAll('.controls').forEach(control => {
    const input = control.querySelector('input');
    const button = control.querySelector('button');
    const prop = input.dataset.prop;

    button.addEventListener('click', () => {
        const value = input.value.trim();
        if (!value) return;

        if (prop === 'rotate') {
            currentRotation = parseInt(value);
            block.style.transform = `rotate(${currentRotation}deg)`;
          } 
          else if (prop === 'width'){
            block.style.width = value + 'px';
            console.log("Добавляем 'px'");
          } 
          else if (prop === 'height'){
            block.style.height = value + 'px';
            console.log("Добавляем 'px'");
          } 
          else if (prop === 'borderRadius'){
            block.style.borderRadius = value + 'px';
            console.log("Добавляем 'px'");
          } 
          else {
            block.style[prop] = value;
          }
    });
});
