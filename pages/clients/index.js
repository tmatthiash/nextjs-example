import Link from "next/link"

const ClientsPage = () => {

    const clients = [
        {id: 'max', name: "Maximillion"},
        {id: 'steve', name: "Steve"},
    ]

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map((c) =>{
                    return (
                        <li key={c.id}>
                            <Link href={{
                                pathname: '/clients/[id]',
                                query: {id: c.id}
                            }}>{c.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ClientsPage