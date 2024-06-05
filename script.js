document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            displayUsers(users);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayUsers(users) {
    const userList = document.getElementById('user-list');

    users.forEach(user => {
        const userForm = document.createElement("div");
        // userForm.className = 'mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8';
        console.log(user)
        userForm.innerHTML = `
        <div class="group relative">
        <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src=${user.picture.large ? user.picture.large : "https://tse4.mm.bing.net/th?id=OIP.ybB2a0HimX1I-ybBY4pOPwHaHa&pid=Api&P=0&h=180"}
                alt="Front of men&#039;s Basic Tee in black."
                class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700 font-semibold">
                       ${user.email}
                </h3>
                <p class="mt-1 text-sm text-gray-500">${user.location.country}</p>
                <p class="mt-1 text-sm text-gray-500">phone :-${user.phone}</p>
            </div>
            <p class="text-sm text-gray-900">${user.gender}</p>
        </div>
    </div>
        `;

        userList.appendChild(userForm);
    });
}