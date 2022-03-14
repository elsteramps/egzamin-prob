const firstName = document.querySelector('#fname');
const email = document.querySelector('#Email')
const sliderValue = document.querySelector('#value')
const btn = document.querySelector('.button__submit')
const modal = document.querySelector('.modal')

const btnCloseFirst = document.querySelector('.close')
const btnCloseSecond = document.querySelector('.btn-secondary')

const db = [];

const span = document.getElementsByClassName("close")[0];

class Client {
    constructor(name, email, value){
        this.name = name;
        this.email = email;
        this.value = value
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const client = new Client(
        firstName.value, 
        email.value, 
        sliderValue.innerHTML)

    db.push(client)
    console.log(db);

    modal.style.display = 'block'

    fetch ('http://localhost:3000/clients', {
        method: 'POST',
        'headers': {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(client)
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
})

span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


