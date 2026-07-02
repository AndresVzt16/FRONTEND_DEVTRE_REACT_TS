import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserByHandle } from '../../../services/Services'
import HandleProfile from './Components/HandleProfile'

const Profile = () => {
  const params = useParams()
  const handle = params.handle!
  const {data, error, isLoading} = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ['handle', handle],
    retry: 1

  })

  

  if(isLoading) return ''
  if(error) return <Navigate to={'/404'}/>
  if(data)return <HandleProfile data={data}/>
}
export default Profile