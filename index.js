(() => {
  window.addEventListener('load', () => {

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

  const yesModal = document.getElementById('yes')
  const noModal = document.getElementById('no')
  const modalCloseBtn = document.getElementById('modal-close')

  const buttonContainer = document.getElementById('container-button');
  const priceContainer = document.getElementById('display-price')
  const modal = document.getElementById('modal')

  const displayArea = document.getElementById('display')

  buttonContainer.addEventListener('click', (event) => {
    let targetId = event.target.id;
    // console.log(targetId)
    retrievePriceAndService(targetId, servicesAvailable);
    pushToArray(selectedService, servicesRequested);
    displayTotalPrice();
  })

yesModal.addEventListener('click', () => {
  yesToWarning();
})

noModal.addEventListener('click', () => {
  noToWarning()
})

modalCloseBtn.addEventListener('click', () => {
  toggleModal();
})

// figure out which service and price are associated with each
function retrievePriceAndService (id, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].id) {
      selectedPrice = arr[i].price;
      selectedService = arr[i].service;
      // console.log(`updatePrice = ${selectedPrice} and updateService = ${selectedService}`)
    } else {
      console.log('EXITED retrievePriceAndService: input id did not match input arr.id')
    }
  }
}
// initial zeroed balance and array

function initializeInvoice() {
  servicesRequested = [];
  priceTotal = 0;
}

function toggleModal() {
  console.log('toggleModal fired')
  console.log(modal.style.display)
  if (modal.style.display === '' || modal.style.display === 'none') {
    modal.style.display = "flex"
  } else {
    modal.style.display = "none"
  }
}

function yesToWarning(service, arr) {
  console.log(arr, service)
  arr.push(service);
  updatePrice(selectedPrice)
  displayServicesRequested(selectedService);
  displayPricesRequested(selectedPrice);
  console.log(servicesRequested)
}

function noToWarning() {
  toggleModal()
}

// update array for servicesRequested
function pushToArray (service, arr) {

  if (arr.includes(service)) {
    console.log('arr.includes(service) true')
    toggleModal()
  } else {
    arr.push(service);
    updatePrice(selectedPrice)
    displayServicesRequested(selectedService);
    displayPricesRequested(selectedPrice);
    // console.log(servicesRequested)
  }

}

function updatePrice (price) {
    priceTotal += price;
    // console.log(priceTotal)
}
// update display with array contents
function displayPricesRequested(price) {
  displayArea.childNodes[displayArea.childNodes.length - 2].insertAdjacentHTML('beforeend', `
  <h3 class="service-results"> Price: ${price}</h2>
`) 
}

function displayServicesRequested(service) {

  displayArea.innerHTML += `<div class="price-results">
  <h3 class="price-results"> Service: ${service}</h2>
  </div>
`
}

function displayTotalPrice () {
  priceContainer.innerHTML = `
    <h3 class="price-results">Grand Total: ${priceTotal}</h2>
  `
}
  })
})()