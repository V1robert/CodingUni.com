export interface UserDto {
    email: string
    password: string
    preferredLanguage: string
    isStudying?: boolean
}

export interface ProgrammingLanguage {
    name: string
    id: number
    src: string
}

export interface Course {
    languageId: number
    courseId: number
    order: number
    title: string
    description: string
    language: string

}

export interface ExerciseSlice {
    exercises: Exercise[]
    exerciseProgress: number
}

export interface Exercise extends Lesson {
    exerciseId: number

}

export interface Lesson extends Course {
    lessonId: number
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ExoCardType {
    cardImagePath?: string
    cardTitle: string
    id?: number
    callback?: (value?: any) => void
    cardDescription: string
}
