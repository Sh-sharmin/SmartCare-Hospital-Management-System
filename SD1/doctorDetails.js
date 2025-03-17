const openModal = () => {
  const modal = document.getElementById("appointment-modal");
  modal.style.display = "block";
  const timeContainer = document.getElementById("time-container");
  timeContainer.innerHTML = "";

  const times = ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM"];
  times.forEach((time) => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    timeContainer.appendChild(option);
  });
};

const closeModal = () => {
  const modal = document.getElementById("appointment-modal");
  modal.style.display = "none";
};

const handleAppointment = () => {
  const status = document.getElementsByName("status");
  const selectedStatus = Array.from(status).find((button) => button.checked);
  const symptom = document.getElementById("symptom").value;
  const timeContainer = document.getElementById("time-container");
  const selectedTime = timeContainer.options[timeContainer.selectedIndex];
  const patient_id = localStorage.getItem("patient_id");

  const urlParams = new URLSearchParams(window.location.search);
  const doctorId = urlParams.get("id");

  if (!selectedStatus || !symptom || !selectedTime) {
    alert("Please fill all fields.");
    return;
  }

  const info = {
    appointment_type: selectedStatus.value,
    appointment_status: "Pending",
    time: selectedTime.value,
    symptom: symptom,
    cancel: false,
    patient: patient_id,
    doctor: doctorId,
  };

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(info);
  localStorage.setItem("appointments", JSON.stringify(appointments));

  alert("Appointment booked successfully!");
  closeModal();

};
