const firstName = document.querySelector('#fname');
const email = document.querySelector('#Email')
const sliderValue = document.querySelector('#value')
const btn = document.querySelector('.button__submit')

const db = [];

class Client {
    constructor(name, email, value){
        this.name = name;
        this.email = email;
        this.value = value
    }
}

btn.addEventListener('click', (e) => {
        e.preventDefault()
        const client = new Client(firstName.value, email.value, sliderValue.innerHTML)
        db.push(client)
        console.log(db);

    }
)



