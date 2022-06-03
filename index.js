(() => {
  // create variables
  const servicesRequested = [];
  const servicesAvailable = [
    {
      service: 'Car Wash',
      price: 10,
      id : "car-wash"
    }, 
    {
      service: 'Mow Lawn',
      price: 20,
      id : "lawn-mowed"
    }, 
    {
      service: 'Pull Weeds',
      price: 30,
      id : "pull-weeds"
    }
  ];
  let selectedPrice;
  let selectedService;
  let updatedPrice;
  let updateService;


  // grab buttons
  const buttonCar = document.getElementById("car-wash");
  const buttonLawn = document.getElementById("lawn-mowed");
  const buttonWeeds = document.getElementById("pull-weeds");

  const buttonContainer = document.getElementById('button-container')

  // get display area
  const displayArea = document.getElementById('display')

  buttonContainer.addEventListener('click', (event) => {
    let targetId = event.target.id;
    console.log(targetId)

    retrievePriceAndService(targetId, servicesAvailable);
    displayPricesRequested(selectedPrice);
    displayServicesRequested(selectedService)
  })

// tell which button was pushed(done with listener)

// figure out which service and price are associated with each
function retrievePriceAndService (id, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      selectedPrice = arr[i].price;
      selectedService = arr[i].service;
      console.log(`updatePrice = ${selectedPrice} and updateService = ${selectedService}`)
    } else {
      console.log('input id did not match input arr.id')
    }
  }
}

// update array for servicesRequested
function displayPricesRequested(price) {
  displayArea.innerHTML = `
    <h1> Price: ${price}</h1>
  `
}

function displayServicesRequested(service) {
  displayArea.innerHTML = `
    <h1> Service: ${service}</h1>
  `
}
// update display with array contents

// remove contents from array

// update display






})()