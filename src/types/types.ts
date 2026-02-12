export interface UserDto {
    email: string
    password: string
}

export interface ProgrammingLanguage {
    name: string
    id: number
    src: string
}

export interface Course {
    courseId: number
    languageId: number
    title: string
    description: string
    imagePath: string

}

export interface ExoCardType {
    cardImagePath?: string
    cardTitle: string
    cardDescription: string
}