import Feedback from './components/Feedback';
import './components/styles.css'

export default function App() {
  return (
    <div className="contaner">
      <Feedback
        good={0}
        neutral={0}
        bad={0}
      />
    </div>
  )
}