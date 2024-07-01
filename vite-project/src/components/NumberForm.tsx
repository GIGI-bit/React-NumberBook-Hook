/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { PhoneNumber } from "./Number";

interface NumberFormProps {
  addContact: (contact: PhoneNumber) => void;
}

const NumberForm: React.FC<NumberFormProps> = ({ addContact }) => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const nameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const surnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };
  const numberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newNumber: PhoneNumber = {
      name: name,
      surname: surname,
      number: number,
    };
    addContact(newNumber);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name..." onChange={nameChange} />
        <input
          type="text"
          placeholder="Enter Surname..."
          onChange={surnameChange}
        />
        <input
          type="text"
          placeholder="Enter Number..."
          onChange={numberChange}
        />
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};

export default NumberForm;
