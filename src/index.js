import React from "react"
import ReactDOM from "react-dom/client"
import App from "./Containers/App"
import "./Styles/index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)
