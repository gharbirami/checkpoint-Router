import React from 'react'
import Main from './Main'
import {Route} from 'react-router-dom'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import Description from './components/Description'


function App({movie}) {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Main}/>
    
        <Route path='/Description/:movieId' >
         <Description movie={movie} />
          </Route>
          
      </Switch>
      </Router>
    </div>
  )
}

export default App
