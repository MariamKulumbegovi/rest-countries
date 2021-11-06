import { RouteWithSubRoutes } from "../../Routes"
import { Switch } from "react-router"
import { Link } from "react-router-dom"
import { TOP_PRODUCTS_PATH } from "../../constants/routes"
import styles from './Products.module.css'
import axios from "axios"
export const Products= ({routes})=>{
  
    return (
        <div>
      <h3 className={styles.white}>Products</h3>
      <Link to={TOP_PRODUCTS_PATH}>Top Products</Link>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} route={route} />
        ))}
      </Switch>
    </div>
    
    )
}