document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', () => {
        fetch('http://localhost:8080/users') 
            .then(response => response.json())
            .then(users => {
                const usersContainer = document.getElementById('users');
                usersContainer.innerHTML = ''; 
                users.forEach(user => {
                    const userDiv = document.createElement('div');
                    userDiv.className = 'user-item';
                    userDiv.innerHTML = `<strong>ID:</strong> ${user.id} <br> <strong>Name:</strong> ${user.name} <br> <strong>Password:</strong> ${user.password}`;
                    usersContainer.appendChild(userDiv);
                });
            })
            .catch(error => console.error('Error:', error));
    });
});
