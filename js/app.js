const loadData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container')

    phoneContainer.textContent = '';
    phones = phones.slice(0,12);

    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card w-96 bg-gray-200 shadow-xl';
        phoneCard.innerHTML = `
        
  <figure class="px-10 pt-10">
    <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center space-y-5">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <h3 class="text-2xl font-bold">$999</h3>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `
        phoneContainer.appendChild(phoneCard);

    });
}

// handle search button

const handleSearch = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    loadData(searchText);
}



// loadData();