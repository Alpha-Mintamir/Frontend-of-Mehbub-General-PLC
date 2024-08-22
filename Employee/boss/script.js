document.getElementById("assign-btn").addEventListener("click", function () {
    const taskTitle = document.getElementById("task-title").value.trim();
    const description = document.getElementById("description").value.trim();
    const dueDate = document.getElementById("due-date").value;
    const assignees = document.getElementById("assignees").value.trim();

    if (!taskTitle || !description || !dueDate || !assignees) {
        alert("Please fill out all fields.");
        return;
    }

    // Display success notification
    const notification = document.getElementById("notification");
    notification.textContent = `Assignment "${taskTitle}" created successfully and assigned to: ${assignees}`;
    notification.style.display = "block";
    
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);

    // Clear form fields
    document.getElementById("task-title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("assignees").value = "";
});
