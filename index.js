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

  const yesModal = document.getElementById('yes')
  const noModal = document.getElementById('no')
  const modalCloseBtn = document.getElementById('modal-close')
  const buttonContainer = document.getElementById('container-button');
  const priceContainer = document.getElementById('display-price')
  const modal = document.getElementById('modal')
  const displayArea = document.getElementById('display')

  yesModal.addEventListener('click', () => {
    yesToWarning(selectedPrice);
  })
  
  noModal.addEventListener('click', () => {
    noToWarning(selectedPrice);
  })
  
  modalCloseBtn.addEventListener('click', () => {
    noToWarning(selectedPrice, serviceRequested);
  })

  buttonContainer.addEventListener('click', (event) => {
    let targetId = event.target.id;
    retrievePriceAndService(targetId, servicesAvailable);
    pushToArray(selectedService, servicesRequested);
    console.log(servicesRequested)
    console.log(selectedPrice)
    displayTotalPrice();
  })

  function retrievePriceAndService (id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (id === arr[i].id) {
        selectedPrice = arr[i].price;
        selectedService = arr[i].service;
      } else {
        console.log('EXITED retrievePriceAndService: input id did not match input arr.id')
      }
    }
  }

  function pushToArray (service, arr) {

      updatePrice(selectedPrice);
      displayServicesRequested(selectedService);
      displayPricesRequested(selectedPrice);
    if (arr.includes(service)) {
      arr.push(service);
      console.log('arr.includes(service) true')
      toggleModal()
      console.log(`second item selected: priceTotal is ${priceTotal}`)
    } else {
      arr.push(service);
      console.log('no need to trigger modal')
    }
  
  }

  function updatePrice (price) {
    priceTotal += price;
}

function subtractPrice(price) {
  console.log(`price in subtractPrice is ${price} and priceTotal is ${priceTotal}`)
  priceTotal -= price;
  console.log(`price in subtractPrice is ${price} and priceTotal is ${priceTotal}`)
}

function displayServicesRequested(service) {
  displayArea.innerHTML += `<div class="price-results">
  <h3 class="price-results"> Service: ${service}</h2>
  </div>
`
}

function displayPricesRequested(price) {
  displayArea.childNodes[displayArea.childNodes.length - 2].insertAdjacentHTML('beforeend', `
  <h3 class="service-results"> Price: ${price}</h2>
`) 
}

function displayTotalPrice () {
  priceContainer.innerHTML = `
    <h3 class="price-results">Grand Total: ${priceTotal}</h2>
  `
}

function toggleModal() {
  if (modal.style.display === '' || modal.style.display === 'none') {
    modal.style.display = "flex"
  } else {
    modal.style.display = "none"
  }
}

function yesToWarning() {
  toggleModal()
}

function noToWarning(selectedPrice, serviceRequested) {
  console.log('no to warning');
  console.log(servicesRequested);
  subtractPrice(selectedPrice)
  removeItemFromOrder();
  displayTotalPrice();
  toggleModal();
}

function removeItemFromOrder() {
  displayArea.removeChild(displayArea.lastChild);
  displayArea.removeChild(displayArea.lastChild);
}

  })
})()