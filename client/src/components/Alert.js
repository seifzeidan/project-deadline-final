import { useAppContext } from "../context/appContext"

const Alert = () => {

  const {alertType, alertText } = useAppContext() /*the values we need to make the alert dynamic,they come from global context  */

  return (
    <div className={`alert alert-${alertType}`}>
        {alertText}
    </div>
  )
}
export default Alert