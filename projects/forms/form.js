document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const first = document.getElementById('first').value;
    console.log(first);
    const last = document.getElementById('last').value;
    console.log(last);
    const email = document.getElementById('email').value;
    console.log(email);
    const password = document.getElementById('password').value;
    console.log(password);
    const age = document.getElementById('age').value;
    console.log(age);
    const comments = document.getElementById('comments').value;
    console.log(comments);
    const friendsRadio = document.querySelector('input[name="friends"]:checked');
    console.log(friendsRadio.value);
    const cleanRadio = document.querySelector('input[name="clean"]:checked');
    console.log(cleanRadio.value);
    const calmRadio = document.querySelector('input[name="calm"]:checked');
    console.log(calmRadio.value);
    const emotionsRadio = document.querySelector('input[name="emotions"]:checked');
    console.log(emotionsRadio.value);


    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.disabled = true); //Disable all form fields after submission

    if (!first || !last || !email || !age || !comments) {
        alert('Please fill out all fields');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }

    if (!friendsRadio) {
        alert('Please select an option for the this question');
        return;
    }

    if (!cleanRadio) {
        alert('Please select an option for the this question');
        return;
    }

    if (!calmRadio) {
        alert('Please select an option for the this question');
        return;
    }

    if (!emotionsRadio) {
        alert('Please select an option for the this question');
        return;
    }

    const data = {
        firstname: first,
        lastname: last,
        email: email,
        password: password,
        age: age,
        comments: comments,
        friends: friendsRadio.value,
        clean: cleanRadio.value,
        calm: calmRadio.value,
        emotions: emotionsRadio.value
    };

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'form.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            //document.getElementById('form').innerHTML = ''; // Clear the HTML form
            //document.getElementById('form').reset();  // Reset the form fields
            alert('Form submitted');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});