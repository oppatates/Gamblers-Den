function randomNumber() {
    const min = parseInt(document.getElementById('min').value,);
    const max = parseInt(document.getElementById('max').value,);
    const res = document.getElementById('result');

    const sonuc = Math.floor(Math.random() * (max - min + 1)) + min;
    res.innerHTML ='You rolled '+ sonuc;
}