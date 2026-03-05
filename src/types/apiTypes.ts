export interface ExerciseApiDto {
    programmingLanguage: string;
    courseId: number;
    lessonId: number;
    language: string
}

export type ExerciseAnswerDto = {
    languageId: number;
    courseId: number;
    lessonId: number;
    exerciseId: number;
    userAnswerId: number;
    correct: boolean;
}
