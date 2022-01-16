import React  from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


//HOC
//
import Landing from "../src/pages/landing.pages";
import Audio from "./pages/audio";
import Video from "./pages/video";
import VideoInterview from "./pages/videoInterview";
import AudioInterview from "./pages/audioInterview";
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";

const App=()=> {
  return (
    <>


        <Router>
        <div>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/audio" exact component={Audio} />
            <Route path="/video" exact component={Video} />
            <Route path="/interview/v" exact component={VideoInterview} />
            <Route path="/interview/a" exact component={AudioInterview} />
            <Footer/>
        </div>
        </Router>
      {/* <InterviewType>
      <Landing/>
      </InterviewType>
      <Footer/> */}
      {/* <DefaultHoc path="/" exact component={Landing} /> */}
      {/* <DefaultHoc path="/audio" exact component={Audio} />
      <DefaultHoc path="/video" exact component={Video} />

      <DefaultHoc path="/interview/v" exact component={VideoInterview} />
      <DefaultHoc path="/interview/a" exact component={AudioInterview} /> */}
      
    </>
  );
}

export default App;
