import styles from "./app.module.css"

import { Header } from "./components/header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"

export default function App() {

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizada" />

        <div className={styles.word}>
          <Letter value="R"></Letter>
          <Letter value=""></Letter>
          <Letter value=""></Letter>
          <Letter value="c"></Letter>
          <Letter value="t"></Letter>
        </div>

        <h4>Palpite</h4>

        <div>
          <Input autoFocus maxLength={1} placeholder="?"></Input>
        </div>
      </main>
    </div>
  )
}