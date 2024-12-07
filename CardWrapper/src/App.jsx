import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CardWrapper>
        <div>
          hi there
          <TextComponent></TextComponent>
        </div>
      </CardWrapper>
      <CardWrapper>
        <div>
          hello  there good
        </div>
      </CardWrapper>
    </div>
  )
}
function TextComponent(){
  return <div>
    hi there from textcomponent
  </div>
}

function CardWrapper({children}){
return <div style={{border:"2px black solid",padding:20,margin:10}}>
  {children}
</div>
}
export default App
