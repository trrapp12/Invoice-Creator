(() => {
  window.addEventListener('load', () => {
    // create variables
  let servicesRequested = [];
  let priceTotal = 0;
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

  // grab containers
  const buttonContainer = document.getElementById('container-button');
  const priceContainer = document.getElementById('display-price')

  // get display area
  const displayArea = document.getElementById('display')

  buttonContainer.addEventListener('click', (event) => {
    let targetId = event.target.id;
    console.log(targetId)

    retrievePriceAndService(targetId, servicesAvailable);
    pushToArray(selectedService, servicesRequested);
    displayTotalPrice();
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
// initial zeroed balance and array

function initializeInvoice() {
  servicesRequested = [];
  priceTotal = 0;
}
// update array for servicesRequested
function pushToArray (service, arr) {
  if (arr.includes(service)) {
    console.log('service already included in the list')
  } else {
    arr.push(service);
    updatePrice(selectedPrice)
    displayPricesRequested(selectedPrice);
    displayServicesRequested(selectedService);
    console.log(servicesRequested)
  }

}

function updatePrice (price) {
    priceTotal += price;
    console.log(priceTotal)
}
// update display with array contents
function displayPricesRequested(price) {

  displayArea.innerHTML += `<div class="price-results">
    <h3 class="price-results"> Price: ${price}</h2>
    </div>
  `
}

function displayServicesRequested(service) {
  displayArea.childNodes[displayArea.childNodes.length - 2].insertAdjacentHTML('beforeend', `
  <h3 class="service-results"> Service: ${service}</h2>
`) 
}

function displayTotalPrice () {
  priceContainer.innerHTML = `
    <h3 class="price-results">Grand Total: ${priceTotal}</h2>
  `
}
// remove contents from array

// update display

  })
})()