export type TGithubJob = {
        jobsVisible: TJob[], 
        jobsCache: TJob[], 
        start: number, 
        end: number, 
        page: number, 
        endJobs: boolean,
        valueExpectedCache: number,
        jobDescription: string,
        location: string,
        isSearch: boolean,
}

export type TStateGithubJob = {
    githubjobs: {
        jobsVisible: TJob[], 
        jobsCache: TJob[], 
        start: number, 
        end: number, 
        page: number, 
        endJobs: boolean,
        valueExpectedCache: number,
        jobDescription: string,
        location: string,
        isSearch: boolean,
    }
}

export type TPropsSearch = {
    setLoad(boolean?: boolean): void
}

export type TJobCard = {
    id: string
    title: string
    type: string
    created_at: number
    location: string
    company: string
}

export type TStateJobInformation =  { 
    description: string, 
    title: string, 
    type: string, 
    location: string,
    howToApply: string
}

export type TJob = {
    id: string
    title: string
    type: string
    created_at: number
    location: string
    company: string
    description: string
    how_to_apply: string
}

export type TAction = {
    type: string,
    payload: any
}