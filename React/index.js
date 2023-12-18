// const reactHeading = React.createElement("h1",{className:"head"}, "Hii This is react code");
// // console.log("React ele:", reactHeading);

// const btn = React.createElement("button",{className:"btn"},"click here")
// const image = React.createElement('img', {
//     src: 'https://files.codingninjas.in/coding-ninjas-24647.png',
//     className: 'image-class'
//   });
  
// const div = React.createElement("div", {className:"App",children:[reactHeading,btn,image]})
// // ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// ReactDOM.createRoot(document.getElementById("root")).render(div);

// Ract with JSX

// const header = (
//     <>
//     <div>
//         <h1 className="Header">Hii</h1>
//         <p>Write somthing about your self</p>
//         <button>click</button>
//     </div>
//     </>
// );


// create react component
// function App(){
    // or
    const App = () =>{
    return(
        <>
        <h1 className="Header">Hii</h1>
        <p>Write somthing about your self</p>
        <button>click</button>
        </>
    )
}

function Name(){
    return(
    <>
    <p>Hii my name is satyam</p>

    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name /></>);
// •	Node.js v21.1.0 to /usr/local/bin/node
// •	npm v10.2.0 to /usr/local/bin/npm
// Make sure that /usr/local/bin is in your $PATH.