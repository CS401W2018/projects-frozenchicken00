document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name);

    const fav = document.getElementById('fav').value;
    console.log(fav);

    const color = document.getElementById('color').value;
    console.log(color);

    const breed = document.getElementById('breed').value;
    console.log(breed);

    const data = {
        name: name,
        fav: fav,
        color: color,
        breed: breed
    };

    const chr = new XMLHttpRequest();
    chr.open('GET', 'form.json', true);
    chr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    chr.onreadystatechange = function () {
        if (chr.readyState === 4 && chr.status === 200) {
            const response = JSON.parse(chr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('form').innerHTML = '';
            alert('Form submitted');
        } else if (chr.readyState === 4) {
            alert('Error submitting form');
        }
    };
    chr.send(JSON.stringify(data));

    console.log(data);
});