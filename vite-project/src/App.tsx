/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NumberForm from "../src/components/NumberForm";
import { PhoneNumber } from "./components/Number";

function App() {
  const [contacts, setContacts] = useState<PhoneNumber[]>([]);

  const addContact = (contact: PhoneNumber) => {
    const updatedContacts = [...contacts, contact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };
  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);
  return (
    <>
      <NumberForm addContact={addContact} />
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} {contact.surname} - {contact.number}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
