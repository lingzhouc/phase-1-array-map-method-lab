const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titles = tutorials.map(title => {
      title = title.split(" ");
      
      return title.map(word => {
          return word[0].toUpperCase() + word.slice(1);
      }).join(" ");

  })
  return titles;
}

console.log(titleCased())

// const titleCased = () => {
//   const titles = tutorials.map(title => {
//     let temp = "";
//     const wordArray = title.split(" ");

//     for(word of wordArray) {
//       word = word[0].toUpperCase() + word.slice(1);
//       temp += " " + word;
//     }
//     return temp; 
//   })
//   return titles;
// }

// let test = tutorials[0].split(" ")
// test = test[0].charAt(0).toUpperCase() + test[0].slice(1)


