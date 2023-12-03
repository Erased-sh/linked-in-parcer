import 'dotenv/config'
import { IAccessToken, IGetjobs, urls } from './zInterfaces'



interface RoutConfig{
    accessToken:IAccessToken,
    getJobs:IGetjobs,
}

export const authConfig={
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECrEt
}

export const routes:RoutConfig={
    accessToken: {
        contentType: "application/x-www-form-urlencoded",
        grant_type: '',
        client_id: authConfig.client_id,
        client_secret: authConfig.client_secret,
        url: urls.accessToken,
        type: 'POST'
    },
    getJobs: {
        Connection: 'Keep-Alive',
        Authorization: 'Bearer {access_token}',
        url: urls.jobs,
        type: 'GET'
    }
}