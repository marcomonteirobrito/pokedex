import { useRouter } from 'next/router'

const Details = () => {
    const { query } = useRouter()
    
    return <h1>{query.id}</h1>
}

export default Details