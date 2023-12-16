let arr = [
    {
      id: 1,
      name: "Leanne Graham",
      age: 18,
      gender: 'male',
      username: "Bret",
      email: "Sincere@april.net",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      age: 23,
      gender: 'male',
      username: "Antonette",
      email: "Shanna@melissa.org",
      website: "hildegard.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      age: 37,
      gender: 'female',
      username: "Samantha",
      email: "Nathan@yesenia.net",
      website: "hildegard.org",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      age: 20,
      gender: 'female',
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      website: "hildegard.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      age: 30,
      gender: 'male',
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      age: 42,
      gender: 'male',
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      website: "ola.org",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      age: 25,
      gender: 'male',
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      website: "elvis.io",
    }
  ]

  
let older = []
let younger = []

for (let item of arr) {
  if (item.age > 35) {
    older.push(item);
  } else {
    younger.push(item);
  }
}


console.log(older, younger);

let totalAge = 0;

for (let item of arr) {
    totalAge = totalAge + item.age
}

console.log(totalAge);