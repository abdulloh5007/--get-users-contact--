document.getElementById('allow-contacts').addEventListener('click', function () {
    navigator.contacts.select(['name', 'email', 'phone'], { multiple: true }, function (contacts) {
        console.log(contacts);
    }, function (error) {
        console.error(error);
    });
});