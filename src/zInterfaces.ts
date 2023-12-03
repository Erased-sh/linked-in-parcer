interface SingleRoutConfig{
    url:string,
    type:"POST"|"GET"|"PUT"|"DELETE",
    contentType?:string,
}

export enum urls{
    accessToken="https://www.linkedin.com/oauth/v2/accessToken",
    jobs="https://api.linkedin.com/v2/jobs"
}

export interface IAccessToken extends SingleRoutConfig{
    grant_type:string,
    client_id:string,
    client_secret:string
}

export interface IGetjobs extends SingleRoutConfig{
    Connection:string,
    Authorization:string
}