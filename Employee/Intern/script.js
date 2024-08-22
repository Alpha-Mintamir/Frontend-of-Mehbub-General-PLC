document.getElementById("submit-btn").addEventListener("click", function () {
    const fileInput = document.getElementById("file");
    const comment = document.getElementById("comment").value;
  
    // Validate file input
    if (fileInput.files.length === 0) {
      alert("Please upload at least one file.");
      return;
    }
  
    // Display selected files in the file list
    const fileListContainer = document.getElementById("file-list");
    fileListContainer.innerHTML = ""; // Clear previous file list
    Array.from(fileInput.files).forEach(file => {
      const p = document.createElement("p");
      p.textContent = file.name;
      fileListContainer.appendChild(p);
    });
  
    // Add comment to the comment history
    if (comment.trim()) {
      const commentList = document.getElementById("comment-list");
      const li = document.createElement("li");
      li.textContent = comment;
  
      // Add delete button to each comment
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
      deleteButton.addEventListener("click", function () {
        li.remove();
      });
      li.appendChild(deleteButton);
  
      commentList.appendChild(li);
  
      // Clear comment input after adding to history
      document.getElementById("comment").value = "";
    }
  
    // Trigger confirmation modal
    $('#confirmationModal').modal('show');
  });
  
  // Handle modal confirmation
  document.querySelector('.modal-footer .btn-success').addEventListener("click", function () {
    $('#confirmationModal').modal('hide');
  
    // Show success notification
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);
  
    // Add actual form submission logic here
  });
  