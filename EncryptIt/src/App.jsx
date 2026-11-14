import { useState } from 'react'
import './App.css'

function App() {
  const [Text, setText] = useState("")
  const [shift, setShift] = useState(1)

  function Encrypt(plaintext) {
    let encrypted = ""

    for (let i = 0; i < plaintext.length; i++) {
      const code = plaintext.charCodeAt(i)

      if (code >= 65 && code <= 90) {
        encrypted += String.fromCharCode((code - 65 + shift) % 26 + 65)
      }
      else if (code >= 97 && code <= 122) {
        encrypted += String.fromCharCode((code - 97 + shift) % 26 + 97)
      }
      else {
        encrypted += plaintext[i]
      }
    }

    return encrypted
  }

  return (
    <app>
      <div className="title">Encryption Project:</div>

      <div className='input'>
        <input type="text" id="Plain" value={Text} onChange={(e) => setText(e.target.value)}/>

        <input type="number" name="shift" id="shift" step="1" min={0} max={26} value={shift} onChange={(e) => setShift(e.target.value)}/>
      </div>

      <div>
        Encrypted text: {Encrypt(Text)}
      </div>
    </app>
  )
}

export default App