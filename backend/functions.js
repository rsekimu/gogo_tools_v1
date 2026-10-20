function sampleUsers() {
  let users = [
    {
      id: "abm_001",
      name: "John Doe",
      email: "johndoe@bodawerk.co.ug",
      empID: "EMP-001",
      role: "abm",
    },
    {
      id: "abm_002",
      name: "Mark S",
      email: "marks@bodawerk.co.ug",
      empID: "EMP-002",
      role: "abm",
    },
  ];
  return users;
}
function generateErr(kind, name, message, solution) {
  let errObj = {
    kind: kind,
    name: name,
    msg: message,
    sltn: solution,
  };
  return errObj;
}

let upperAlphabates = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";

function generateDocId(list, phrase) {
  let randNos = "";
  let randLetters = "";
  let lowerAlphabates = upperAlphabates.toLowerCase();
  let n = lowerAlphabates.split(" ").length - 1;
  for (let i = 0; i <= 3; i++) {
    randNos += `${Math.floor(Math.random() * 9)}`;
    randLetters += `${lowerAlphabates.split(" ")[Math.floor(Math.random() * n)]}`;
  }
  let id = `${phrase}_${randNos}_${randLetters}`;

  list.forEach((emp_id) => {
    if (emp_id == id) {
      for (let i = 0; i <= 3; i++) {
        randNos += `${Math.floor(Math.random() * 9)}`;
        randLetters += `${lowerAlphabates.split(" ")[Math.floor(Math.random() * n)]}`;
      }
      id = `${phrase}_${randNos}_${randLetters}`;
    }
  });

  // console.log(id);
  return id;
}
function generateEmpId(list, phrase) {
  let randNos = "";
  let randLetters = "";
  let n = upperAlphabates.split(" ").length - 1;
  for (let i = 0; i <= 3; i++) {
    randNos += `${Math.floor(Math.random() * 9)}`;
    randLetters += `${upperAlphabates.split(" ")[Math.floor(Math.random() * n)]}`;
  }
  let id = `${phrase}-${randNos}`;

  list.forEach((emp_id) => {
    if (emp_id == id) {
      for (let i = 0; i <= 3; i++) {
        randNos += `${Math.floor(Math.random() * 9)}`;
        randLetters += `${upperAlphabates.split(" ")[Math.floor(Math.random() * n)]}`;
      }
      id = `${phrase}-${randNos}`;
    }
  });

  console.log(id);
  return id;
}
// generateEmpId([], "EMP");
module.exports = { generateDocId, generateEmpId };
