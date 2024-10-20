"use client";
import React, { useState } from "react";

const ModalForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [salary, setSalary] = useState<number | "">("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [experience, setExperience] = useState("");
  const [isMarried, setIsMarried] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const ageNum = age === "" ? undefined : Number(age);
    const salaryNum = salary === "" ? undefined : Number(salary);

    const formData = {
      name,
      gender,
      email,
      age: ageNum,
      salary: salaryNum,
      address,
      contact,
      experience,
      isMarried,
    };

    try {
      const response = await fetch("http://localhost:3000/api/teacher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response body:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to add teacher.");
      }
      console.log("Success:", result);
      
      setName("");
      setGender("");
      setEmail("");
      setAge("");
      setSalary("");
      setAddress("");
      setContact("");
      setExperience("");
      setIsMarried("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Type Gender (Male/Female)"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type Email"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        value={age}
        onChange={(e) =>
          setAge(e.target.value === "" ? "" : Number(e.target.value))
        }
        placeholder="Type Age"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="number"
        value={salary}
        onChange={(e) =>
          setSalary(e.target.value === "" ? "" : Number(e.target.value))
        }
        placeholder="Type Salary"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Type Address"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Type Phone Number"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Type Work Experience"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        value={isMarried}
        onChange={(e) => setIsMarried(e.target.value)}
        placeholder="Married or not (true or false)"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="submit"
        value="Add Teacher"
        className="btn btn-sm btn-secondary"
      />
    </form>
  );
};

export default ModalForm;
