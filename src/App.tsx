import './App.css'
import {Hello} from '@/components/Demo/Hello'
import Button from './components/Button/Button'

function App() {

  return (
    <>
    {/* 'default' | 'primary' | 'dashed' | 'text' | 'link'; */}
    <Hello message='hello word'></Hello>
    <Button type="default" color='red[5]' >default</Button>
    <Button type="dashed" color='orange[5]' size='middle'>Dashed</Button>
    <Button type="text" color='blue[5]' size='large'>Text</Button>
    <Button type="link" color='purple[5]' size='small'>Link</Button>
    <Button type="primary" color='green[5]' size='small'>Primary</Button>
    </>
  )
}

export default App
