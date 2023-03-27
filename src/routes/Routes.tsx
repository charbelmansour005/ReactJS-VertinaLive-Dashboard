import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import DashboardMain from "../pages/Dashboard/Dashboard"

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
const Page404 = lazy(() => wait(500).then(() => import("../pages/Error/Error")))

const routesObj = [
  {
    path: "/",
    element: <DashboardMain />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]

export const Routes = () => {
  let element = useRoutes(routesObj)
  return <>{element}</>
}
