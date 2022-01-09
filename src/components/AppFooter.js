import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        &copy;{' '}
        <a href="https://burrow.cash" target="_blank" rel="noopener noreferrer">
          Burrow Cash
        </a>
        <span className="ms-1">Dashboard</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://near.org" target="_blank" rel="noopener noreferrer">
          NEAR Protocol
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
