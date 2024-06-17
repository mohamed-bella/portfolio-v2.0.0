document.getElementById('commandInput').addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
         let input = event.target.value.trim();
         handleCommand(input);
         event.target.value = '';
     }
 });
 
 const outputElement = document.getElementById('output');
 
 const commands = {
     'help': 'Available commands:\n - help\n - about\n - projects\n - social\n - clear\n',
     'about': 'Hello, i am MOHAMED BELLA, a Junior Web Developer, i love start with a black page and bright it to life. i use Nodejs, Expressjs and Mongodb and Now im learning Nextjs.',
     'projects': 'Here are some of my projects:\n- Projects Will Be Added Soon As Possible.',
     'social': 'Find me on:\n- GitHub:<a href="https://github.com/bellaxcode"> github.com/bellaxcode</a>\n- LinkedIn: <a href="https://linkedin.com/in/mohamed-bella ">linkedin.com/in/mohamed-bella </a>\n- Instagram : <a href="https://instagram.com/bellaxcode">instagram.com/bellaxcode</a>',
     'clear': ''
 };
 
 function handleCommand(input) {
     let response;
     if (commands[input] !== undefined) {
         response = commands[input];
     } else {
         response = `Command not recognized: ${input}`;
     }
     updateOutput(response);
 }
 
 function updateOutput(text) {
     if (text === '') {
         outputElement.innerHTML = '';
     } else {
         outputElement.innerHTML += `> ${text}\n`;
     }
 }
