import styles from "./app.module.css"
import { useEffect, useState } from "react"

import { WORDS, Challenge } from "./utils/words"

import { Header } from "./components/header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

export default function App() {
  const[attempt, setAttempts] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempt} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizada" />

        <div className={styles.word}>
          <Letter value="R"></Letter>
          <Letter value=""></Letter>
          <Letter value=""></Letter>
          <Letter value="c"></Letter>
          <Letter value="t"></Letter>
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?"></Input>
          <Button title="Confirmar"></Button>
        </div>

        <LettersUsed></LettersUsed>
      </main>
    </div>
  )
}