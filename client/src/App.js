import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoronaVirus from './Components/pages/CoronaVirus';
import Discoveries from './Components/pages/Discoveries';
import Vaccines from './Components/pages/Vaccines';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Test
import{ useDispatch} from 'react-redux';
import * as actions from './redux/actions';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF-rqqF_dKefsm0N3v_Cn-DJ9K5yuIw9E",
  authDomain: "covid19-data-news.firebaseapp.com",
  projectId: "covid19-data-news",
  storageBucket: "covid19-data-news.appspot.com",
  messagingSenderId: "1026728649163",
  appId: "1:1026728649163:web:80034e67a090f6dce3964e",
  measurementId: "G-4GX5WVJPTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
    const dispatch = useDispatch();
    dispatch(actions.getDatas.getDatasRequest())
    
    return (
        <div className="App  bg-[#F1F1F2] ">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Discoveries />} />
                    <Route exact path='/CoronaVirus' element={<CoronaVirus />} />
                    <Route exact path='/Vaccines' element={<Vaccines />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
