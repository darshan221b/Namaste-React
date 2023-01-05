import ReactDOM from 'react-dom/client';

const heading = (
    <h1 id="title">
        Hello World
    </h1>
)
console.log(heading)

const HeaderComponent = () => {
    return (
        <div>
            {heading}
            Hello World functional component
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); 