import { useRouter } from "next/router"

const ClientProjectsPage = () => {

    const router = useRouter()
    
    const loadProjectHandler = () => {
        router.push("/clients/max/projecta")
    }

    return (
        <div>
            <h1>The Projects of a Given Client {router.query.id}</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}

export default ClientProjectsPage