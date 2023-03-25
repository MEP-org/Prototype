import { classes, student_classes } from './data.json';

export const ClassesAPI = {
    getByProfessor: async function(profId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return classes.filter((item) => item.professor.id === profId);
    },

    getByStudent: async function(studentId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return student_classes.filter((item) => item.Nmec === studentId);
    }
}