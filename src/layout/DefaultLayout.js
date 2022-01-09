import React from 'react'
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components/index'
require('dotenv').config()

const DefaultLayout = () => {
  const [burrowData, setBurrowData] = React.useState({})

  const LoadStats = async () => {
    console.log(`Loading ${process.env.REACT_APP_STATS_JSON}`)
    return await fetch(process.env.REACT_APP_STATS_JSON, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      mode: 'no-cors',
    }).then((response) => {
      if (!response.ok) {
        return JSON.parse(`{}`)
      }
      return response.json()
    })
  }

  React.useEffect(() => {
    async function fetchData() {
      return await LoadStats()
    }
    fetchData().then((myJson) => setBurrowData(myJson))
  }, [])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent {...burrowData} />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
