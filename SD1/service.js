const serviceFees = {
  "Cardiac Surgery": "$300",
  "Dental Surgery": "$150",
  "Blood Test": "$15",
  MRI: "$100",
  "X Ray": "$50",
  "COVID 19 Test": "$30",
};

const loadServices = () => {
  fetch("https://testing-8az5.onrender.com/services/")
    .then((res) => res.json())
    .then((data) => displayService(data))
    .catch((err) => console.log(err));
};

const displayService = (services) => {
  const parent = document.querySelector(".services-container");
  parent.innerHTML = "";
  services.forEach((service) => {
    const fee = serviceFees[service.name] || "Not Available";
    const div = document.createElement("div");
    div.classList.add("service");
    div.innerHTML = `
              <div class="service-image">
            <img src="${service.image}" alt="${service.name}" />
          </div>
          <div class="service-info">
            <h1>${service.name}</h1>
            <p>${service.description}</p>
            <h4>Fees:  ${fee}</h4>
            <button onclick="openModal('${service.name}')">Book</button>
          </div>
          `;
    parent.appendChild(div);

    const hr = document.createElement("hr");
    parent.appendChild(hr);
  });
};

const openModal = (serviceName) => {
  const modal = document.getElementById("bookingModal");
  const modalTitle = modal.querySelector("h2");
  modalTitle.textContent = `Book ${serviceName}`;
  modal.style.display = "block"; 
};

const closeModal = () => {
  const modal = document.getElementById("bookingModal");
  modal.style.display = "none";
};

const handleBooking = () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;

  if (name && phone && date) {
    alert("Booking Successful!");
    alert(`Name: ${name}, Phone: ${phone}, Date: ${date}`);
    closeModal(); 
  } else {
    alert("Please fill in all fields");
  }
};

document.querySelector(".close").addEventListener("click", closeModal);
loadServices();
