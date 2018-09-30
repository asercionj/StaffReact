
import React from "react";
import namor from "namor";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newEmployee = () => {
    const statusChance = Math.random();
    return {
      firstName: namor.generate({ words: 1, numbers: 0 }),
      lastName: namor.generate({ words: 1, numbers: 0 }),
      hours: Math.floor(Math.random() * 20),
      ProjectsCompleted: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status:
        statusChance > 0.66
          ? "Working" 
          : statusChance > 0.33 ? "Vacation" : "Off Project"
    };
  };

  export function makeData(len = 5553) {
    return range(len).map(d => {
      return {
        ...newEmployee(),
        children: range(10).map(newEmployee)
      };
    });
  }