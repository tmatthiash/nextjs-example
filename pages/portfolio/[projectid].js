import { useRouter } from "next/router"




const PortfolioProjectPage = () => {

    const router = useRouter();

    console.log(router.query.projectid)

    return (
        <div>
            <h1>The Portfolio project page {router.query.projectid}</h1>
        </div>
    )
}

export default PortfolioProjectPage