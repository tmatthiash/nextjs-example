import { useRouter } from "next/router"

const SelectedClientProjectPage = () => {
    
    const router = useRouter();

    console.log(router.query)
    
    return (
        <div>
            <h1>The Project page for a specific project {router.query.clientprojectid} for a specific client {router.query.id}</h1>
        </div>
    )
}

export default SelectedClientProjectPage