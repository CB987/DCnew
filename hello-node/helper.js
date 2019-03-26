// function sendHelp() {
//   return "help is on the way";
// }

// const sendHelp = function() {
//   return "help is on the way";
// };\\

// const sendHelp = () => {
//   return "help is on the way";
// };

// and that line is a `return`, you can omit the curly BroadcastChanneland you can omit the return keyword and the semicolon
// this is known as implicit return

// const sendHelp = (whom) => `Don't worry, ${whom}, help is on the way`;

// if there is only one arguement, you can omit the parenths.

const sendHelp = whom => `Don't worry, ${whom}, help is on the way`;

module.exports = sendHelp;
