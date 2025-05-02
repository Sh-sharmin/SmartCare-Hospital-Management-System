const loadServices = () => {
    fetch("https://testing-8az5.onrender.com/services/")
      .then((res) => res.json())
      .then((data) => displayService(data))
      .catch((err) => console.log(err));
  };
  
  const displayService = (services) => {
    const parent = document.querySelector(".carousel");
    parent.innerHTML = "";
    services.forEach((service) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
              <img src="${service.image}" alt="${service.name}">
              <h3>${service.name}</h3>
              <p>${service.description.slice(0, 100)}...</p>
          `;
      parent.appendChild(div);
    });
  };
  
  let scrollAmount = 0;
  const scrollMax = 600;
  
  document.querySelector(".next").addEventListener("click", () => {
    scrollAmount += 300;
    if (scrollAmount > scrollMax) scrollAmount = 0;
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(-${scrollAmount}px)`;
  });
  
  document.querySelector(".prev").addEventListener("click", () => {
    scrollAmount -= 300;
    if (scrollAmount < 0) scrollAmount = scrollMax;
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(-${scrollAmount}px)`;
  });
  
  const redirect = () => {
    window.location.href = "service.html";
  };
  
//   const doctors = [
//     {
//       id: 0,
//       full_name: "Dr. Ayesha Khan",
//       image: "Images/doc1.jpg",
//       designation: ["Senior Consultant"],
//       specialization: ["Cardiologist"],
//       fee: 2000,
//       education: "MBBS, MD (Cardiology) - Harvard Medical School",
//     },
//     {
//       id: 1,
//       full_name: "Dr. James Smith",
//       image: "Images/doc2.jpg",
//       designation: ["Medical Officer"],
//       specialization: ["Dermatologist"],
//       fee: 1500,
//       education: "MBBS, Diploma in Dermatology - Johns Hopkins University",
//     },
//     {
//       id: 2,
//       full_name: "Dr. Lisa Brown",
//       image: "Images/doc4.jpg",
//       designation: ["Assistant Professor"],
//       specialization: ["Neurologist"],
//       fee: 1800,
//       education: "MBBS, MD (Neurology) - Stanford University",
//     },
//     {
//       id: 3,
//       full_name: "Dr. Ahmed Rahman",
//       image: "Images/doc3.jpg",
//       designation: ["Surgeon"],
//       specialization: ["Orthopediatritian"],
//       fee: 2500,
//       education: "MBBS, MS (Orthopedics) - University of Toronto",
//     },
//     {
//       id: 4,
//       full_name: "Dr. Emily Watson",
//       image: "Images/doc1.jpg",
//       designation: ["Resident Doctor"],
//       specialization: ["Peadiatritians"],
//       fee: 1200,
//       education: "MBBS, MD (Pediatrics) - Yale University",
//     },
//     {
//       id: 5,
//       full_name: "Dr. Robert Green",
//       image: "Images/doc3.jpg",
//       designation: ["Professor"],
//       specialization: ["Internal medicine"],
//       fee: 2200,
//       education: "MBBS, MD (Internal Medicine) - Oxford University",
//     },
//     {
//       id: 6,
//       full_name: "Dr. Sophia White",
//       image: "Images/doc4.jpg",
//       designation: ["Senior Consultant"],
//       specialization: ["Cardiologist"],
//       fee: 2000,
//       education: "MBBS, MD (Cardiology) - Cambridge University",
//     },
//     {
//       id: 7,
//       full_name: "Dr. David Johnson",
//       image: "Images/doc2.jpg",
//       designation: ["Medical Officer"],
//       specialization: ["Dermatologist"],
//       fee: 1500,
//       education:
//         "MBBS, Diploma in Dermatology - University of California, San Francisco",
//     },
//     {
//       id: 8,
//       full_name: "Dr. Olivia Martinez",
//       image: "Images/doc1.jpg",
//       designation: ["Assistant Professor"],
//       specialization: ["Neurologist"],
//       fee: 1800,
//       education: "MBBS, MD (Neurology) - Duke University",
//     },
//     {
//       id: 9,
//       full_name: "Dr. Henry Wilson",
//       image: "Images/doc3.jpg",
//       designation: ["Surgeon"],
//       specialization: ["Orthopediatritian"],
//       fee: 2500,
//       education: "MBBS, MS (Orthopedics) - University of Sydney",
//     },
//     {
//       id: 10,
//       full_name: "Dr. Maria Garcia",
//       image: "Images/doc4.jpg",
//       designation: ["Resident Doctor"],
//       specialization: ["Peadiatritians"],
//       fee: 1200,
//       education: "MBBS, MD (Pediatrics) - Columbia University",
//     },
//     {
//       id: 11,
//       full_name: "Dr. Ethan Miller",
//       image: "Images/doc3.jpg",
//       designation: ["Professor"],
//       specialization: ["Internal medicine"],
//       fee: 2200,
//       education: "MBBS, MD (Internal Medicine) - University of Chicago",
//     },
//     {
//       id: 12,
//       full_name: "Dr. Isabella Brown",
//       image: "Images/doc1.jpg",
//       designation: ["Senior Consultant"],
//       specialization: ["Cardiologist"],
//       fee: 2000,
//       education: "MBBS, MD (Cardiology) - Imperial College London",
//     },
//     {
//       id: 13,
//       full_name: "Dr. Daniel Thomas",
//       image: "Images/doc2.jpg",
//       designation: ["Medical Officer"],
//       specialization: ["Physiatrist"],
//       fee: 1600,
//       education: "MBBS, MD (Physical Medicine) - University of Michigan",
//     },
//     {
//       id: 14,
//       full_name: "Dr. Charlotte Scott",
//       image: "Images/doc4.jpg",
//       designation: ["Assistant Professor"],
//       specialization: ["General surgery"],
//       fee: 2100,
//       education: "MBBS, MS (General Surgery) - University of Pennsylvania",
//     },
//     {
//       id: 15,
//       full_name: "Dr. Logan Harris",
//       image: "Images/doc4.jpg",
//       designation: ["Surgeon"],
//       specialization: ["Orthopediatritian"],
//       fee: 2500,
//       education: "MBBS, MS (Orthopedics) - University of Melbourne",
//     },
//     {
//       id: 16,
//       full_name: "Dr. Amelia Robinson",
//       image: "Images/doc4.jpg",
//       designation: ["Resident Doctor"],
//       specialization: ["Peadiatritians"],
//       fee: 1200,
//       education: "MBBS, MD (Pediatrics) - Johns Hopkins University",
//     },
//     {
//       id: 17,
//       full_name: "Dr. Michael Carter",
//       image: "Images/doc2.jpg",
//       designation: ["Professor"],
//       specialization: ["Internal medicine"],
//       fee: 2200,
//       education: "MBBS, MD (Internal Medicine) - University of Toronto",
//     },
//     {
//       id: 18,
//       full_name: "Dr. Benjamin Lee",
//       image: "Images/doc4.jpg",
//       designation: ["Senior Consultant"],
//       specialization: ["Physiatrist"],
//       fee: 1900,
//       education: "MBBS, MD (Physical Medicine) - Harvard Medical School",
//     },
//     {
//       id: 19,
//       full_name: "Dr. Grace Adams",
//       image: "Images/doc2.jpg",
//       designation: ["Medical Officer"],
//       specialization: ["Dermatologist"],
//       fee: 1500,
//       education: "MBBS, Diploma in Dermatology - University of Washington",
//     },
//   ];
  
//   const loadDoctors = (search = "") => {
//     document.getElementById("doctors").innerHTML = "";
//     document.getElementById("spinner").style.display = "block";
  
//     setTimeout(() => {
//       document.getElementById("spinner").style.display = "none";
//       let filteredDoctors = doctors;
//       if (search) {
//         search = search.trim().toLowerCase();
  
//         filteredDoctors = doctors.filter((doctor) => {
//           return (
//             (doctor.full_name?.toLowerCase() || "").includes(search) ||
//             (doctor.designation[0]?.toLowerCase() || "").includes(search) ||
//             (doctor.specialization[0]?.toLowerCase() || "").includes(search)
//           );
//         });
//       }
//       if (filteredDoctors.length > 0) {
//         document.getElementById("nodata").style.display = "none";
//         displayDoctors(filteredDoctors);
//       } else {
//         document.getElementById("nodata").style.display = "block";
//       }
//     }, 1000);
//   };
  
//   const displayDoctors = (doctorsList) => {
//     const parent = document.getElementById("doctors");
//     parent.innerHTML = "";
//     doctorsList = doctorsList.slice(0, 6);
//     doctorsList.forEach((doctor, index) => {
//       const div = document.createElement("div");
//       div.classList.add("doc-card");
//       div.innerHTML = `
//               <img class="doc-img" src="${doctor.image}" alt="Doctor Image" />
//               <h4>${doctor.full_name}</h4>
//               <h5>${doctor.designation[0]}</h5>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               <div>${doctor.specialization
//                 .map((item) => `<button>${item}</button>`)
//                 .join(" ")}</div>
//               <button onclick="viewDoctorDetails(${doctor.id})">Details</button>
//           `;
//       parent.appendChild(div);
//     });
//   };
  
//   const viewDoctorDetails = (index) => {
//     const doctor = doctors[index];
//     const queryParams = new URLSearchParams({
//       name: doctor.full_name,
//       image: doctor.image,
//       designation: doctor.designation[0],
//       specialization: doctor.specialization[0],
//       fee: doctor.fee,
//       education: doctor.education,
//     }).toString();
  
//     window.location.href = `doctorDetails.html?${queryParams}`;
//   };
//   const loadSpecialization = () => {
//     fetch("https://testing-8az5.onrender.com/doctor/specialization/")
//       .then((res) => res.json())
//       .then((data) => {
//         const parent = document.getElementById("drop-spe");
//         parent.innerHTML = data
//           .map(
//             (item) =>
//               `<li onclick="loadDoctors('${item.name}')">${item.name}</li>`
//           )
//           .join(" ");
//       })
//       .catch(() => console.log("Failed to load specializations."));
//   };
  
//   const handleSearch = () => {
//     const value = document.getElementById("search").value;
//     loadDoctors(value);
//   };
  
  const loadReview = () => {
    fetch("https://testing-8az5.onrender.com/doctor/review/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        displayReview(data);
      })
      .catch((error) => console.error("Error loading reviews:", error));
  };
  
  const displayReview = (reviews) => {
    const parent = document.querySelector("#carousel"); // Fixed selector
    parent.innerHTML = ""; // Clear previous data
    reviews.forEach((review) => {
      const div = document.createElement("div");
      div.classList.add("review-card");
      div.innerHTML = `
            <img src="./Images/girl.png" alt="Reviewer" />
            <h4>${review.reviewer}</h4>
            <p>${
              review.body
                ? review.body.slice(0, 100)
                : "No review text available."
            }</p>
            <h6>⭐ ${review.rating}</h6>
          `;
      parent.appendChild(div);
    });
  };
  
  const blogs = [
    {
      id: 1,
      title: "5 Tips for a Healthy Lifestyle",
      image: "./Images/healthy.jpg",
      content:
        "Discover the best practices to maintain a healthy life. Eat well, exercise regularly, stay hydrated, and ensure mental well-being. Taking small steps daily can lead to a healthier lifestyle...",
    },
    {
      id: 2,
      title: "Understanding Mental Health",
      image: "./Images/mental.jpg",
      content:
        "Mental health is as important as physical health. Managing stress, getting enough sleep, and seeking support when needed are key aspects of a healthy mind...",
    },
    {
      id: 3,
      title: "Top 10 Foods for Heart Health",
      image: "./Images/heart.jpg",
      content:
        "Eating the right food can significantly improve heart health. Some of the best foods include salmon, nuts, leafy greens, and berries...",
    },
    {
      id: 4,
      title: "Benefits of Yoga for Stress Relief",
      image: "./Images/yoga.jpg",
      content:
        "Yoga can help you relax and improve mental well-being. Regular yoga practice helps reduce stress, improve flexibility, and boost overall health...",
    },
  ];
  
  const displayBlogs = () => {
    const parent = document.getElementById("blog-list");
    parent.innerHTML = "";
    blogs.forEach((blog) => {
      const div = document.createElement("div");
      div.classList.add("blog-card");
      div.innerHTML = `
              <img src="${blog.image}" alt="Blog Image">
              <h4>${blog.title}</h4>
              <p>${blog.content.slice(0, 80)}...</p>
              <a href="blog.html?id=${blog.id}" onclick="saveBlog(${
        blog.id
      })">Read More</a>
          `;
      parent.appendChild(div);
    });
  };
  
  const saveBlog = (id) => {
    const blogData = blogs.find((blog) => blog.id === id);
    localStorage.setItem("selectedBlog", JSON.stringify(blogData));
  };
  
  displayBlogs();
  loadReview();
//   loadDoctors();
  loadServices();
  loadSpecialization();
  loadReview();
  