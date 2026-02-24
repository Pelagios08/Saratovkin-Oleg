document.getElementById('calcBtn').addEventListener('click', function() {
    const h = document.getElementById('heightInput').value;
    const w = document.getElementById('weightInput').value;

// ПРОВЕРКА (Валидация)
    // Если рост или вес меньше или равны 0, или вообще не введены (NaN)
    if (!h || h <= 0 || !w || w <= 0) {
        alert("ERROR: Biometric data must be displayed as numbers!");
    }

// Скрываем блок с результатом, если он был открыт
        document.getElementById('resultBox').style.display = 'none';
        return; // Прерываем выполнение функции, расчет не начнется
    
    if(!h || !w) {
        alert("The system requires data! Enter your height and weight.");
        return;
    }

    // Параметры
    const DOSH_HEIGHT = 12; // cm
    const DOSH_WEIGHT = 0.09; // kg

    const finalHeight = (h / DOSH_HEIGHT).toFixed(1);
    const finalWeight = (w / DOSH_WEIGHT).toFixed(0);

    // Обновляю текст
    document.getElementById('resHeight').innerText = finalHeight;
    document.getElementById('resWeight').innerText = finalWeight;

    // Определяю ранг
    let rank = "";
    if (finalWeight > 1000) {
        rank = "SS: How many Doshirks do you have in you?...";
    } else if (finalWeight > 700) {
        rank = "A: I see Doshirak is dear to you";
    } else {
        rank = "B: Brand new, ready, never mind, your time will come";
    }

    document.getElementById('rankLabel').innerText = "Rank: " + rank;
    
    // Показываю блок
    document.getElementById('resultBox').style.display = 'block';
});
