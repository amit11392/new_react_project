import Navbar from "./componets/Navbar";
import Section from "./componets/Section";

let title = "titlcdghdthbe 1"
let home = "home 1"
let search = "search 1"


function App() {
  return (
   <>
  <Navbar title={title}  home={home} search={search} />
   <Section/>
   </>
  );
}

export default App;
