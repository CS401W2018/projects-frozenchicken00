document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    console.log(name);

    const birthday = document.getElementById('birthday').value;
    console.log(birthday);

    const fav = document.getElementById('fav').value;
    console.log(fav);

    const color = document.getElementById('color').value;
    console.log(color);

    const breed = document.getElementById('breed').value;
    console.log(breed);

    const data = {
        name: name,
        birthday: birthday,
        fav: fav,
        color: color,
        breed: breed
    };

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'form.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('formdata').innerHTML = JSON.stringify(data);
            document.getElementById('form').innerHTML = '';
            alert('Form submitted');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form');
        }
    };
    xhr.send(JSON.stringify(data));

    console.log(data);
});