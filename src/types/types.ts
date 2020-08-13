export type TGithubJob = {
        jobsVisible: TJob[], 
        jobsCache: TJob[], 
        start: number, 
        end: number, 
        page: number, 
        endJobs: boolean,
        valueExpectedCache: number
}

export type TStateGithubJob = {
    githubjobs: {
        jobsVisible: TJob[], 
        jobsCache: TJob[], 
        start: number, 
        end: number, 
        page: number, 
        endJobs: boolean,
        valueExpectedCache: number
    }
}

export type TProps = {
    jobsVisible: TJob[], 
    jobsCache: TJob[], 
    start: number, 
    end: number, 
    page: number, 
    endJobs: boolean
}

export type TJobCard = {
    title: string
    type: string
    created_at: number
    location: string
    company: string
}

export type TJob = {
    title: string
    type: string
    created_at: number
    location: string
    company: string
}

export type TAction = {
    type: string,
    payload: any
}