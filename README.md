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

### Updating the State
In React the State is not directly updated.
`this.state.count++;` value of the count property is incremented but react isn't aware of that.  
So the view is not updated.  
to solve this we use an inherited method `this.setState()` from the base `Component` in React.  
`this.setState()` can only be called when a component is rendered and placed in the DOM

In Angular automatically detects the changes,  
because all browser events are monkey patched (It allows you to modify the behaviour of a piece of code without altering the original code)  
When a button is clicked or type something Angular is notified and runs it's change detection algorithm, and will update the view. 

In React we have to explicitly tell what has changed.

`this.setState({count: this.state.count + 1});`   
Passes the count property: get the current count + increment by 1 and set it 
Argument to setState, we pass an object and the properties of the object will be merged with what we have in the State object or
it will override those properties if they already exists. 

`this.setState()`  this will tell React the state of the component is going to change.  
React will then schedule a call to the render() sometime in the future, this is an asynchronous call  
So the virtual DOM will be updated and will compare with the old DOM to figure out what elements are modified  
and update the corresponding elements in the Real DOM.

### Passing event arguments

Using a wrapper/helper method (Simple solution and this is messy to use)  
    
    handleIncrement = product => {
        console.log(product);
    }
    
    doHandleIncrement = () => {
        this.handleIncrement({id:1})
    };
    
    <button onClick={this.doHandleIncrement} 
    </button>

Using an inline function (Better solution)

    handleIncrement = product => {
            console.log(product);
    }
    
    <button onClick={() => this.handleIncrement(product)} 
    </button>

When you need to pass an argument to an event handler,  
simply pass an arrow function `() =>` and  
in the body of the function call the event handler `this.handleIncrement()` and  
pass an argument `{id:1})`  


### Composing components

`key={}` is used to identify elements uniquely, not a attribute in props
Key is used internally by React, that's why we have to pass `id{}`  

Use an array and then map to have multiple elements of the same component

`this.props` Every React component has property called `props`    
This is a plain JS object  
Includes all attributes that are set in the parent component (passing attributes to the other component using props)  
Props are Read-only  
`pure` functions do not attempt to change their inputs  
We can read the prop values and use that to initialize components  
Name props from the component’s own point of view rather than the context in which it is being used
Eg: Counter has a value  

`<Counter key={counter.id} value={counter.value} selected/>)` Selected will be true by default in props

Attributes set in a component can be passed onto another component using `props` object

### Passing children
`children` prop is used when we need to pass something between the opening and closing tags of an element  
Can be used to pass complex elements to child components  
So we can pass elements through components  
counters.jsx
        
        <Counter>
            <h4> This heading is a child </h4>
        </counter>    

counters.jsx

        {this.props.children}


## Prop VS State

`prop`  includes data that we give to a component  
Read-only  
Input to a component
If we need to modify the prop values we can put it in the local state and use as required


`state` includes data that is local or private to that component, so other components cannot access that state  
Some components may not have a state and get all the data via props

### Raising and handling events

The component that owns a piece of the state, should be the one modifying it.  

Number of counters are in the counters state  
(child) Counter component will raise an event > onEvent  
(parent) Counters component will handle the event> handleEvent  

`onDelete={this.handleDelete}` passing reference of the `handleDelete` function to the child component (counter).  
We name the prop based on the name of the event `onDelete`  

`<button onClick={() => this.props.onDelete(this.props.counter.id)}` name of the prop passed in the parent component


We can pass the object from parent via props and access in obj using `this.props.obj.____`

    <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />)  

    (this.props.id)
    (this.props.value)
 
 
 Better way using encapsulation,   
 
    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />)

    (this.props.counter.id)
    (this.props.counter.value)



### Single source of truth
state is only executed once when an instance of a component is created

Removing local state 

#### Controlled component
Doesn't have it's own local state  
Receives all the data via props  
Raises events whenever data needs to be changed  
Parent take cares of modifying data 

Passing a reference of an object from the child component  
makes the implementation of the event handler easier  
rather than passing an id of the component

#### Stateless Functional component
Doesn't have it's own local state  
Receives all the data via props   
No event handlers or helper methods  
Lifecycle hooks cannot be used because we only have a single function that outputs the component

Only have a single render method  
Instead of having a class extended with a render()  
we simply define a function that returns a react element  
In functional component need to add props as a parameter  
React will pass the props object as an argument to this function at runtime  

    const NavBar = (props) => {
        return (
        <component>
            {props.}
        </component>
        )
    }    

Classes can also be used
`{this.props.}` only works in class components

    class NavBar extends Component {
        render() {
        }
    }


### Object Destructuring
Extract properties from objects and bind them to variables.  
Object destructuring can extract multiple properties in one statement,  
can access properties from nested objects,  
and can set a default value if the property doesn't exist.


<React.Fragment>...</React.Fragment>  
Used when returning multiple root elements from the render method  


## Lifecycle Hooks
Components go through a few phases during it's lifecycle  
React will automatically call these methods referred to as lifecycle hooks when going through each phase  
So they allow us to hook into certain moments during the lifecycle of a component and do something  
Can only be used in class components

### 1. Mounting Phase
When an instance of a component/class is created and inserted to the DOM  

#### 1.1 constructor
Called only once when an instance of a class is created  
Best place to initialize properties in that instance  
Set the state based on the props received  
In the constructor the state is set directly
`this.setState()` can only be called when a component is rendered and placed in the DOM

We won't have access to this.props unless we pass it as a parameter to the constructor  
otherwise this.props will return undefined 

    construtor(props) {
        super(props);
        this.state = this.props.something 
        
    }

#### 1.2 render
When a component is rendered all it's child components are also rendered recursively

    render() {
        //returns a react element that represents the virtual DOM
    }

#### 1.3 componentDidMount
Called after the component is rendered on the DOM  
Perfect place to make Ajax calls to get data from the server  

    componentDidMount() {
        this.setState( {something} )
    }

### 2. Updating Phase
Whenever we change the state of the component or the props  

#### 2.1 render
When updating the state, react will schedule a call to the render()  
which means all it's child components are rendered as well  
Entire component tree is rendered it doesn't mean that the entire DOM is updated  
When a component is rendered we basically get a react element which updated the virtual DOM  
React will then look at the new virtual DOM and it has a copy of the old virtual DOM  
(this is why we should not update the state directly) So we can have two different object references in memory  
Then react will figure out what is changed and based on that React will update the Real DOM  


#### 2.2 componentDidUpdate
This method is called after a component is updated which means we have a new state or new props  
So we can compare the new state/props and old state/props  
if there is a change we can make an Ajax request to get new data  
So if there is no change it will not make an unwanted additional Ajax call  

    componentDidUpdate(prevProps, prevState) {
        if ( prevProps.counter.value !== this.props.counter.value ) {
            //Ajax call and get new data from the server
        }
    }

### 3. Unmount Phase
When a component is removed from the DOM such as when we delete a component  

#### 3.1 componentWillUnmount
This method is called just before a component is removed from the DOM  
State will be changed when deleting so the entire component tree will be re-rendered  
So there will be a new virtual DOM and react will compare with the old one and it figures out a component is removed  
So then react will call this method before removing the component from the DOM  
This gives an opportunity to do any kind of clean up 

## Debugging React Applications
Use React Developer Tools browser extension  

<hr>  

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
