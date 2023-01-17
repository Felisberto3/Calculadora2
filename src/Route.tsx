import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/home/home'
import LayoutDefault from './Pages/LayoutDefault/layoutDefault'

export default function Routing() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LayoutDefault/>}>

                    <Route path='/' element={<Home/>}/>

                </Route>
            </Routes>
       </BrowserRouter>
    )
    
}