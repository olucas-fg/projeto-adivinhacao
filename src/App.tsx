import styles from "./app.module.css"

import { Header } from "./components/header"

export default function App(){

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
      <Header current={5} max={10} onRestart={handleRestartGame} />
      </main>
    </div>
  )
}