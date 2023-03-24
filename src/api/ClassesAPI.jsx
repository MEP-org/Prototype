import { classes } from './data.json';

export const ClassesAPI = {
    get: async function(profId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return classes.filter((item) => item.professor.id === profId);
    }
}