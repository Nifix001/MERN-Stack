import { useEffect, useState } from "react"

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
        <p key={workout.id}>{workout.title}</p>
    ))}
    </div>
  )
}

export default Home
