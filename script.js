document.addEventListener('DOMContentLoaded', () => {
    // Анимация печатания заголовка
    const botNameElement = document.getElementById('bot-name');
    const botNameText = "ИИ Бот-Напоминалка"; // Текст, который будет "печататься"
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < botNameText.length) {
            botNameElement.textContent += botNameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Скорость печатания (миллисекунды на символ)
        } else {
            // После завершения печатания удаляем анимацию курсора
            botNameElement.style.borderRight = 'none';
            botNameElement.style.animation = 'none';
        }
    }

    // Запускаем анимацию печатания при загрузке страницы
    typeWriter();
});