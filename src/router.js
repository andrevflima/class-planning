import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Teste from './pages/teste/teste';

class AppRouter extends Component { 
    render() {
        return(
            <div>
                <Router>
                    <Routes>
                        <Route path='/teste' Component={Teste} ></Route>  
                    </Routes>    
                
                </Router> 
            </div>
        )
    }
}

export default AppRouter;