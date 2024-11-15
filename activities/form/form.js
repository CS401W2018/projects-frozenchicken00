document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const first = document.getElementById('first').value;
    console.log(first);

    const last = document.getElementById('last').value;
    console.log(last);

    const id = document.getElementById('id').value;
    console.log(id);

    const year = document.getElementById('year').value;
    console.log(year);

    const classes = document.getElementById('classes').value;
    console.log(classes);

    const fullname = (first + ' ' + last);
    if (!first || !last || !id) {
        alert('Please fill out all fields');
        return;
    }
    if (!classes) {
        alert('Please select a class');
        return;
    }
    console.log(fullname);
    alert('Form submitted');

    const data = {
        firstname: first,
        lastname: last,
        id: id,
        classes: classes
    };

    const chr = new XMLHttpRequest();
    chr.open('POST', 'message.json', true);
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