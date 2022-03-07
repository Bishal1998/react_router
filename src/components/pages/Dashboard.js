import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    
    let navigate = useNavigate()
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={() => {navigate('/logout')}}>Logout</button>
    </div>
  )
}

export default Dashboard;