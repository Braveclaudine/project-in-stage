// Get references to the input field, buttons, and action list
const actionInput = document.getElementById("actionInput");
const addActionButton = document.getElementById("addActionButton");
const actionList = document.getElementById("actionList");

let actions = []; // Array to store actions

// Function to add a new action
function addAction() {
  const actionText = actionInput.value.trim();
  if (actionText === "") {
    alert("Please enter an action!");
    return;
  }

  const action = {
    id: Date.now(), // Unique ID for each action
    text: actionText
  };

  actions.push(action); // Add action to the list
  renderActions(); // Update the actions displayed
  actionInput.value = ""; // Clear input field
}

// Function to delete an action
function deleteAction(actionId) {
  // Filter out the action with the specified ID
  actions = actions.filter((action) => action.id !== actionId);
  renderActions(); // Update the actions displayed
}

// Function to edit an action
function editAction(actionId) {
  // Find the action to edit
  const actionToEdit = actions.find((action) => action.id === actionId);
  const newText = prompt("Edit your action:", actionToEdit.text);
  
  if (newText && newText.trim() !== "") {
    actionToEdit.text = newText.trim();
    renderActions(); // Update the actions displayed
  } else {
    alert("Action cannot be empty!");
  }
}

// Function to render the actions list
function renderActions() {
  actionList.innerHTML = ""; // Clear the list

  actions.forEach((action) => {
    const listItem = document.createElement("li");
    listItem.textContent = action.text; // Set the text content

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");
    editButton.addEventListener("click", () => editAction(action.id));

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteAction(action.id));

    // Append buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Add the list item to the action list
    actionList.appendChild(listItem);
  });
}

// Add event listener to the Add Action button
addActionButton.addEventListener("click", addAction);