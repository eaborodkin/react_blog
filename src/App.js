import {Component} from "react";
import Navbar from "./Navbar"
import Home from "./Home";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/create" element={<Create/>}/>
                            <Route path="/blogs/:id" element={<BlogDetails/>}/>

                            <Route path="/not-found" element={<NotFound/>}/>
                            <Route path="*" element={<Navigate to="/not-found" replace/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
