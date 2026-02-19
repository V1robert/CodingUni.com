export interface UserDto {
    email: string
    password: string
    preferredLanguage: string
}

export interface ProgrammingLanguage {
    name: string
    id: number
    src: string
}

export interface Course {
    courseId: number
    languageId: number
    order: number
    title: string
    description: string
    language: string

}

export interface ExoCardType {
    cardImagePath?: string
    cardTitle: string
    cardDescription: string
}