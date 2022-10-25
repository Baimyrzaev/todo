import { axiosRequest } from 'configs'
import { IUser } from 'types/user'


export const postUser = (userId: string | null, body: IUser) => {
  return axiosRequest.put(`/users/${userId}.json`, body)
}
