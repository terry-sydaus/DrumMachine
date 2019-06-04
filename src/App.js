import React from 'react';
import Header from './Header';
import Main from './Main';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
//
//Notes:
// 1. Be careful when comparing types for the keyCode property of an event. Use an integer for keyCode, not a string as I originally did and this caused all sorts of troubles for me in my debugging efforts.
// 2. Note the use of "refs" in the audio html element. This allows direct reference to properties and methods on a HTML directly, in this case the audio elements rendered by this App. Note, I wanted to understand when to use refs
// as opposed to "document.getElementById". I found a very good explanation on stack overflow, whereby it states that React will not prevent you from creating different elements that have the same id (which is not good). 
// I demonstrated this for myself and saw how in fact it was indeed possible to create different elements with the same id. In order to be able to reference the exact element in your application, refs will ensure this. 
// Refer https://stackoverflow.com/questions/37273876/reactjs-this-refs-vs-document-getelementbyid
// 3. Based on the fact that functional components have certain limitations (eg. a) no access to lifecycle methods or b) inability to use refs), it is better to create react components as Class components and only convert them to
// functional components if by the end of the app development it is clear that they do not need to be Class based components.
// 4. Do not forget to use destructuring when referring to props. See https://dev.to/dylanesque/how-i-built-a-drum-machine-in-react-part-three-refactoring-and-success-4oj1, where the line:
// "const { id, name, src } = this.props" is used before the render methods return instruction to create variable names (id, name, src) from the this.props object.
// 5. Came to the realisation that the only way I could create a 3 x 3 table for this application was by using the css 'grid' capability. Surprisingly easy to use and is now another tool in my css tool kit for laying out content on a page.
