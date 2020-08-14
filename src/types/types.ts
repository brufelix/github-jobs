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
        currentDescription: string,
        currentLocation: string
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
        currentDescription: "", 
        currentLocation: ""
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
    setAllJobs(boolean: boolean): void
}

export type TPropsHeader = {
    setAllJobs(boolean: boolean): void
    allJobs: boolean
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