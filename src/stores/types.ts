export interface userDetailsRequestObj {
    username:string
    password:string
}

export interface SkillObj{
    image_url: string
    name:string
}


export interface profileDetailsTypes{
    name:string
    profile_image_url:string
    short_bio:string
}


export interface profileDetailsResponseObj{
    profile_details:profileDetailsTypes
}

export interface LifeAtCompanyTypes{
        description:string
        image_url: string
      
}


export interface JobDetailsDataResponseObj{
    company_logo_url:string
    company_website_url:string
    employment_type:string
    id:string
    job_description:string
    location:string
    package_per_annum:string
    rating:string
    skills:Array<SkillObj>
    title:string
    life_at_company:LifeAtCompanyTypes
}

export interface JobDataResponseObj{
    company_logo_url :string
    employment_type :string
    id:string
    job_description :string
    location:string
    package_per_annum:string
    rating:string
    title:string
}