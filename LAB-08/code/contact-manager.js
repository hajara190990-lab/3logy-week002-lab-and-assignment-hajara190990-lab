// Simple Contact Manager
const contacts = [];

// Add a contact
function addContact(name, phone, email, address) {
  if (!phone || phone.length < 10) {
    console.log("Invalid phone number");
    return;
  }
  if (!email.includes("@")) {
    console.log("Invalid email");
    return;
  }
  contacts.push({ name, phone, email, address });
  console.log("Contact added!");
}

// View all contacts
function viewContacts() {
  if (contacts.length === 0) {
    console.log("No contacts yet.");
    return;
  }
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  contacts.forEach(c => {
    console.log(`${c.name} - ${c.phone} - ${c.email} - ${c.address}`);
  });
}

// Search by name
function searchByName(name) {
  const found = contacts.filter(c => c.name.toLowerCase() === name.toLowerCase());
  console.log(found.length ? found : "Not found");
}

// Search by phone
function searchByPhone(phone) {
  const found = contacts.filter(c => c.phone === phone);
  console.log(found.length ? found : "Not found");
}

// Update contact
function updateContact(name, newPhone, newEmail, newAddress) {
  const contact = contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (!contact) {
    console.log("Contact not found");
    return;
  }
  if (newPhone) contact.phone = newPhone;
  if (newEmail) contact.email = newEmail;
  if (newAddress) contact.address = newAddress;
  console.log("Contact updated!");
}

// Delete contact
function deleteContact(name) {
  const index = contacts.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
  if (index === -1) {
    console.log("Contact not found");
    return;
  }
  contacts.splice(index, 1);
  console.log("Contact deleted!");
}

// --- Test the functions ---
addContact("Aisha", "07066182650", "aish@gmail.com", "Kaduna");
addContact("Ameer", "07033250452", "ajl@gmail.com", "Abuja");

viewContacts();           // Shows Aisha and Ameer
searchByName("Aisha");    // Finds Aisha
searchByPhone("07033250452"); // Finds Ameer
updateContact("Ameer", "07033250452"); // Updates Ameer's phone
deleteContact("Aisha");   // Deletes Aisha
viewContacts();           // Shows only Ameer
