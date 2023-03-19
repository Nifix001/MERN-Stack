import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fectchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fectchWorkouts()
    }, [])

  return (
    <div className="home">
    {workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} workout={workout} />
    ))}
    </div>
  )
}

export default Home
