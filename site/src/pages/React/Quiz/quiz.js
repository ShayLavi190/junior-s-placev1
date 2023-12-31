export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'Which of the following is used in React.js to increase performance ?',
        choices: ['Virtual DOM', 'Original DOM', 'Both A and B', 'None of the above'],
        type: 'MCQ', 
        correctAnswer: 'Virtual DOM',
      },
      {
        question: 'What is ReactJS ?',
        choices: ['Server-side framework', 'User interface framework', 'Both A and B', 'None of the above'],
        type: 'MCQ', 
        correctAnswer: 'User interface framework',
      },
      {
        question: 'What is the full form of REPL ?',
        choices: ['Read Eval Print Loop', 'Research Eval Print Learn', 'Read Earn Point Loop', 'Read Eval Point Loop'],
        type: 'MCQ', 
        correctAnswer: 'Read Eval Print Loop',
      },
      {
        question: 'Identify the one which is used to pass data to components from outside',
        choices: ['Render with arguments', 'SetState', 'PropTypes', 'Props'],
        type: 'MCQ',
        correctAnswer: 'Props',
      },
      {
        question: 'In which language is React.js written ?',
        choices: ['Python', 'JavaScript', 'Java', 'PHP'],
        type: 'MCQ',
        correctAnswer: 'JavaScript',
      },      
      {
        question: 'Identify the command used to create a react app.',
        choices: ['npm install create-react-app', 'npm install -g create-react-app', 'install -g create-react-app', 'None of the above'],
        type: 'MCQ',
        correctAnswer: 'npm install -g create-react-app',
      },      
      {
        question: 'A state in React.js is also known as ?',
        choices: ['The internal storage of the component', 'External storage of the component', 'Permanent storage','All of the above'],
        type: 'MCQ',
        correctAnswer: 'The internal storage of the component',
      },      
      {
        question: 'Which of the following method is used to access the state of a component from inside of a member function ?',
        choices: ['this.prototype.stateValue', 'this.getState()', 'this.values', 'this.state'],
        type: 'MCQ',
        correctAnswer: 'this.values',
      },
      {
        question: 'State whether true or false:  Props are methods into other components ?',
        choices: ['True', 'False'],
        type: 'MCQ',
        correctAnswer: 'True',
      },  
      {
        question: 'In MVC, what does React.js act as ?',
        choices: ['View', 'Model', 'Controller', 'Middleware'],
        type: 'MCQ',
        correctAnswer: 'View',
      },  
      {
        question: 'Among The following options, choose the one which helps react for keeping their data uni-directional ?',
        choices: ['DOM', 'Flux', 'JSX', 'Props'],
        type: 'MCQ',
        correctAnswer: 'Flux',
      },  
      {
        question: 'Which of the following function is used to change the state of react component ?',
        choices: ['this.setState()', 'this.state()', 'this.setChangeState()', 'None of the above'],
        type: 'MCQ',
        correctAnswer: 'this.setState()',
      },  
      {
        question: 'The function which is called to render HTML to a web page in react ?',
        choices: ['ReactDOM_render()', 'render()', 'render_DOM()','DOM_HTML()'],
        type: 'MCQ',
        correctAnswer: 'render()',
      },  
      {
        question: 'Which of the following are two ways to handle data in react ?',
        choices: ['Services and components', 'State and props', 'State and services', 'State and component'],
        type: 'MCQ',
        correctAnswer: 'State and props',
      },  
      {
        question: 'When is useReducer used over useState in React component ?',
        choices: ['When we want to replace redux', 'When we want to break our production app', 'When we want to improve preformance', 'None of the above'],
        type: 'MCQ',
        correctAnswer: 'When we want to replace redux',
      },  
      {
        question: 'When setState()  is called inside render() method, which of the following events takes place ?',
        choices: ['Duplicate key error', 'Repetitive output happiness on the screen', 'Nothing happens', 'Stackoverflow error'],
        type: 'MCQ',
        correctAnswer: 'Stackoverflow error',
      },  
      {
        question: 'In react, the key should be ?',
        choices: ['Unique among his siblings only', 'Unique in the DOM', 'Does not requires to be unique', 'All of the above'],
        type: 'MCQ',
        correctAnswer: 'Unique among his siblings only',
      },  
      {
        question: 'State whether true or false: React creates virtual DOM in memory.',
        choices: ['True', 'False'],
        type: 'MCQ',
        correctAnswer: 'True',
      },  
      {
        question: 'State whether true or false: React merges the objects you provide into the current state using setState().',
        choices: ['True', 'False'],
        type: 'MCQ',
        correctAnswer: 'True',
      },  
      {
        question: 'Why is ref used ?',
        choices: ['To bind the function', 'To call a function', 'To directly access the DOM node','To refer to another JS file'],
        type: 'MCQ',
        correctAnswer: 'To directly access the DOM node',
      },  
    ],
  };
  