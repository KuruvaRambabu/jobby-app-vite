export interface userDetailsRequestObj {
    username:string
    password:string
}

export interface skillObj{
    image_url: string
    name:string
}

export interface lifeAtCompanyObj {
    description:string
    imageUrl:string

}


export interface profileDetailsTypes{
    name:string
    profile_image_url:string
    short_bio:string
}


export interface profileDetailsResponseObj{
    profile_details:profileDetailsTypes
}