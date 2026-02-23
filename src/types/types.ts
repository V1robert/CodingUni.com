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
export interface Lesson {
    languageId: number
    courseId: number
    lessonId: number
    order: number
    title: string
    description: string
    language: string
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ExoCardType {
    cardImagePath?: string
    cardTitle: string
    id?:number
    callback?: (value?: any) => void
    cardDescription: string
}
