function randomNumber() {
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
    const res = document.getElementById('result');

    const sonuc = Math.floor(Math.random() * (max - min + 1)) + min;
    res.innerHTML ='You rolled '+ sonuc;
}