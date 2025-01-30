import styles from "./app.module.css"

import { Header } from "./components/header"

export default function App(){
  return (
    <div className={styles.container}>
      <main>
      <Header/>
      </main>
    </div>
  )
}