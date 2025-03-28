document.addEventListener("DOMContentLoaded", function () {
    let progressBar = document.getElementById("progress-bar");

    // Load saved progress
    let savedProgress = localStorage.getItem("course-progress") || "0%";
    progressBar.style.width = savedProgress;
    progressBar.innerText = savedProgress;
});

function updateProgress() {
    let progressBar = document.getElementById("progress-bar");
    
    // Set progress to 100%
    progressBar.style.width = "100%";
    progressBar.innerText = "100%";
    
    // Save progress in localStorage
    localStorage.setItem("course-progress", "100%");
    
    alert("Course Completed! 🎉 Your progress has been saved.");
}