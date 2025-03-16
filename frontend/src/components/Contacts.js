import React, { useState } from "react";
import "../styles/Contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    { name: "Police", number: " 100 ", isPinned: true },
    { name: "Ambulance", number: " 102 ", isPinned: true },
    { name: "Women Helpline", number: " 1091 ", isPinned: true },
    { name: "Family Member", number: " 123-456-7890 ", isPinned: false }
  ]);

  const [newContactName, setNewContactName] = useState("");
  const [newContactNumber, setNewContactNumber] = useState("");

  const addContact = () => {
    if (newContactName && newContactNumber) {
      setContacts([
        ...contacts,
        { 
          name: newContactName, 
          number: newContactNumber, 
          isPinned: false 
        }
      ]);
      setNewContactName("");
      setNewContactNumber("");
    }
  };

  const togglePin = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].isPinned = !updatedContacts[index].isPinned;
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  // Sort contacts: pinned first, then alphabetically
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="contacts-container">
      <h2>Emergency Contacts</h2>
      
      <div className="card add-contact-form">
        <h3>Add New Contact</h3>
        <div className="flex gap-10">
          <input 
            type="text" 
            className="input-field" 
            placeholder="Contact Name" 
            value={newContactName}
            onChange={(e) => setNewContactName(e.target.value)}
          />
          <input 
            type="text" 
            className="input-field" 
            placeholder="Phone Number" 
            value={newContactNumber}
            onChange={(e) => setNewContactNumber(e.target.value)}
          />
        </div>
        <div className="contact-form-actions">
          <button onClick={addContact} className="btn btn-primary">
            Add Contact
          </button>
        </div>
      </div>
      
      <ul>
        {sortedContacts.map((contact, index) => (
          <li key={index}>
            <div className="contact-info">
              <div className="contact-icon">
                {contact.name.charAt(0)}
              </div>
              <div className="contact-details">
                <span className="contact-label">{contact.name}</span>
                <span className="contact-number">{contact.number}</span>
              </div>
            </div>
            <div className="contact-actions">
              <button onClick={() => togglePin(index)}>
                {contact.isPinned ? (
                  <span className="pin-icon">📌</span>
                ) : (
                  <span>📌</span>
                )}
              </button>
              {!contact.isPinned && (
                <button onClick={() => deleteContact(index)}>
                  🗑️
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;