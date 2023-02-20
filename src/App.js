import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
import SignInSignupWithLocalStorage from "./Components/SignInSignUp";

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <>
    
      {
        exit === false
        
          ?
          <>
          
            { 
              start === true
                ?
                
                
                <Quiz/>
                :
                // <Start />
                <SignInSignupWithLocalStorage/>
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default App;
