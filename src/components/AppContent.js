import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = (burrowData) => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            if (!Object.keys(burrowData).length)
              return (
                <div className="pt-3 text-center">
                  <div className="sk-spinner sk-spinner-pulse" />
                </div>
              )
            else {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => {
                      if (burrowData) {
                        props.burrowData = burrowData
                      }
                      return (
                        <>
                          <route.component {...props} />
                        </>
                      )
                    }}
                  />
                )
              )
            }
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
