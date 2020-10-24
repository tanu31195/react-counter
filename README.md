`<React.Fragment> </React.Fragment>` can be used for `<div> </div>`
It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node). This only has a real benefit on 
very large and/or deep trees, but application performance often suffers from death by a thousand cuts. This is one cut less.  
Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationship, and adding divs in the middle 
makes it hard to keep the desired layout while extracting logical components.  
The DOM inspector is less cluttered.

Using custom css, but use classes for better performance and maintainability  
`    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    };`


`state = {
      count: 10,
        imageUrl: 'https://picsum.photos/200'
    };`
`<img src={this.state.imageUrl} alt=''/>`

Hard coding classes  
`<span style={this.styles} className='badge badge-danger m-2'>{this.formatCount()}</span>`

Using inline styling  
`<span style={{ fontSize: 50 }} className='badge badge-primary m-2'>{this.formatCount()}</span>`


`export default class Counter extends Component{`
or
`export default Counter;`
can be used to export

<hr>  

### && Operator
However, the && operator actually returns the value of one of the specified operands, 
so if this operator is used with non-Boolean values, it will return a non-Boolean value.
If expr1 can be converted to true, returns expr2; else, returns expr1.

expressions that can be converted to false are:  
- null;
- NaN;
- 0;
- empty string ("" or '' or ``);
- undefined.

<hr>

### Handling events

Use {} to pass expressions

Naming convention for event methods handle......  Eg: handleIncrement() {}

Not calling methods, but simply passing a reference to the method this.handleIncrement
In vanilla js the target function is called this.handleIncrement()

<hr>

### Binding event handlers
#### this
`this` in JS behaves differently than other languages  
Depending on how a function is called `this` can reference different objects  

`use strict` to enable strict mode 
With strict mode, you can not, use undeclared variables.  
Strict mode makes it easier to write "secure" JavaScript.  

The `this` keyword in functions behaves differently in strict mode.  

`obj.method()`  this refers to obj  
The `this` keyword refers to the object that called the function.

`function()` Standalone function refers to the window object  
If the object is not specified, functions in strict mode will return `undefined` and functions   
in normal mode will return the global object (window):  

Functions in JavaScript are objects, so they have properties and methods.  
So we can use bind method to set the value of `this`  
Bind creates a new function that will force the `this` inside the function to be the parameter passed to `bind()`

#### To bind event handlers use,

    constructor() {
        super(); //base constructor
        console.log(this);
        this.handleIncrement.bind(this)
    //    This bind method will return a new instance of the handleIncrement(), and in that function this will be referenced to the current object (Counter)
    }
    
    handleIncrement() {
            console.log('Increment clicked');
        }

or  

     handleIncrement = () => {
         console.log('Increment clicked');
     };

Arrow functions cannot rebind `this`, they inherit `this`

















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
