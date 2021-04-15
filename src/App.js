import React, { useState, useEffect } from 'react'
import './App.css'
import Heading from './Components/Heading'
import HeadingForm from './Components/HeadingForm'

function App() {
  const [titleText, setTitleText] = useState("hola")
  const [albumsList, setAlbumsList] = useState({})
  const [fetchingData, setFetchingData] = useState(false)

  const changeHandler = event => {
    setTitleText(event.target.value)
  }

  /*useEffect(() => {
    fetch("https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/.json")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setAlbumsList(json)
      })
  }, [])*/

  useEffect(() => {
    console.log("texto cambió ")

  }, [titleText])

  const getAlbums = () => {
    setFetchingData(true)
    setTimeout(function () {
      fetch("https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/.json")
        .then(response => response.json())
        .then(json => {
          console.log(json)
          setAlbumsList(json)
          setFetchingData(false)
        })
    }, 2000)

  }

  return (
    <div className="App">
      <Heading titleText={titleText} />
      <HeadingForm handler={changeHandler} />
      {
        fetchingData && <h1> cargando contenido</h1>
      }
      {
        <ul>
          {
            Object.keys(albumsList).length &&
              Object.keys(albumsList).map(key => (
                 <li>{ albumsList[key].gender}</li>
              ))}


        </ul>
      }
      <button type="button" onClick={getAlbums}>Obtener Albumes </button>
    </div>
  )
}

export default App


{
  /*import React, { Component } from 'react'
import './App.css';

import Heading from './Components/Heading'
import HeadingForm from './Components/HeadingForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      titleText : "Hola asdas d!!! "
    }
    this.onChangeHandler = this.onChangeHandler.bind( this )
  }

  onChangeHandler( event ){
    let text = event.target.value 
    this.setState( { titleText: text } )
  }

  render() {
    return (
      <div className="App">
        <Heading titleText = { this.state.titleText }/>
        <HeadingForm 
          handler = { this.onChangeHandler } 
        />
      </div>
    )
  }
}

export default App;
*/}
