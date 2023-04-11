import { assignment, student_assignments, profExercices } from './data.json';

export const ExercicesAPI = {
    getByProf: async function(profId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return profExercices;
    },
    getByStudent: async function(studentId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return student_assignments;
    },
    
    getPublic: async function() {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return []
    },

    getAssignmentById: async function(assignmentId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return assignment;
    },

    getProfExerciceById: async function(profId, exerciceId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return {
            "exercice": undefined,
            "classes": []
        }      
    },  
}