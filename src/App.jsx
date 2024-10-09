import SignupForm from './components/SignupForm'
import logo from "../src/assets/logo.png"

function App() {

  return (
    <div className='flex justify-center bg-[#fafafa]'>
      <img src={logo} alt="logo" className='absolute top-10 left-10 w-28 max-md:w-20'/>
      <div className='max-md:mt-28 mx-10 my-12'>
      <SignupForm />
      </div>
    </div>
  )
}

export default App
