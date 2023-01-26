import React from 'react'
import ReactDOM from 'react-dom/client'

// function App() {
//     return <h1>Hello app.js</h1>
// }

function Title() {
    return <h1>Hello App.JS</h1>
}
function Content() {
    return (
        <div>
            <p>Lorem</p>
            <p>Lorem</p>
        </div>
    )
}

function TitleContent() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <TitleContent />
    </React.StrictMode>
)

// const h1 = React.createElement('h1', { id: 'title' }, 'Hello React')

// const h1 = <h1 id="title">Hello React.js</h1>
// const a = 10
// const b = 'Product'
// const list = (
//     <ul id="list">
//         <li>Item {a}</li>
//         <li>{b} 2</li>
//         <li>Item 3</li>
//         <li>Item 4</li>
//     </ul>
// )
// const list = React.createElement(
//     'ul',
//     null,
//     React.createElement('li', null, 'list item1'),
//     React.createElement('li', null, 'list item2'),
//     React.createElement('li', null, 'list item3')
// )

// const content = (
//     <div>
//         {h1}
//         {list}
//     </div>
// )
