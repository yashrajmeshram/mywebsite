// Sample Job Data
const jobs = [
    { title: "Software Engineer", location: "Pune", experience: "2-4 years",education: " 12th pass"},
    { title: "Marketing Manager", location: "Mumbai", experience: "3-5 years",education: "12th pass"},
    { title: "Data Analyst", location: "Bengaluru", experience: "1-3 years",education: "12th pass"},
    { title: "HR Specialist", location: "Delhi", experience: "2-4 years",education: "12th pass" },
    { title: "Web Developer", location: "Hyderabad", experience: "1-2 years",education: "12th pass" },
];

// Function to Display Jobs
function displayJobs(jobList) {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = ""; // Clear previous results

    if (jobList.length === 0) {
        jobListings.innerHTML = "<p>No jobs found. Please try again!</p>";
        return;
    }

    jobList.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Education: ${job.education}</p>
            <p>Location: ${job.location}</p> 
            <p>Experience: ${job.experience}</p>
            <button> Apply Now</button>
        `;
        jobListings.appendChild(jobCard);
    });
}

// Function to Search Jobs
function searchJobs() {
    const titleInput = document.getElementById("job-title").value.toLowerCase();
    const locationInput = document.getElementById("job-location").value.toLowerCase();

    const filteredJobs = jobs.filter(job =>
        (job.title.toLowerCase().includes(titleInput) || !titleInput) &&
        (job.location.toLowerCase().includes(locationInput) || !locationInput)
    );

    displayJobs(filteredJobs);
}

// Initial Display of Jobs
displayJobs(jobs);

