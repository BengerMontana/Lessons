import React from 'react'
import ReactDOM from 'react-dom/client'
interface ITitleProps {
  text: string
}

const Title = (props: ITitleProps) => {
  console.log(props)
  return <h1>Hello {props.text}</h1>
}

const Content = () => {
  return (
    <div>
      <React.Fragment>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque quas doloremque esse quam veritatis eveniet dolores ipsam vero! Esse quia id debitis commodi dolorem, nobis ullam quas, molestias sed ex natus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores, amet sequi aspernatur, nemo recusandae atque, quas minima unde natus saepe.
        </p>
      </React.Fragment>
    </div>
  )
}

function App() {
  return (
    <>
      <Title text="React"/>
      <Title text="TS"/>
      <Content />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)