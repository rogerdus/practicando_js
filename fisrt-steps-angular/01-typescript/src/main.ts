import './style.css'

const app = document.querySelector<HTMLDivElement>('#app');

app?.innerHTML? = "hola"

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
