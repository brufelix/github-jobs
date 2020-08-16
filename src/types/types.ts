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

export type TPropsFeed = {
    jobsVisible: TJob[], 
    jobsCache: TJob[], 
    start: number, 
    end: number, 
    page: number, 
    endJobs: boolean,
    allJobs: boolean,
    setAllJobs(boolean: boolean): void
}

export type TPropsSearch = {
    jobsVisible: TJob[], 
    jobsCache: TJob[], 
    start: number, 
    end: number, 
    page: number,
}

export type TJobCard = {
    id: string
    title: string
    type: string
    created_at: number
    location: string
    company: string
}

export type TStateJobPage =  { 
    description: string, 
    title: string, 
    type: string, 
    location: string
}

export type TJob = {
    id: string
    title: string
    type: string
    created_at: number
    location: string
    company: string
    description: string
}

export type TAction = {
    type: string,
    payload: any
}