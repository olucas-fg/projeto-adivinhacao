import styles from "./app.module.css"

import { Header } from "./components/header"
import { Tip } from "./components/Tip"
import { Letter} from "./components/Letter"

export default function App(){

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
      <Header current={5} max={10} onRestart={handleRestartGame} />

      <Tip tip="Uma das linguagens de programação mais utilizada"/> 

      <Letter value="R"></Letter>
      <Letter value=""></Letter>
      <Letter value=""></Letter>
      <Letter value="c"></Letter>
      <Letter value="t"></Letter>
      </main>
    </div>
  )
}