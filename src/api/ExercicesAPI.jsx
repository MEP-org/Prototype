
export const ExercicesAPI = {
    getByProf: async function(profId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return [
            {
                "id": 1,
                "class": {
                    "id": 1,
                    "name": "ML-C1"
                },
            }
        ]
    },
    getByStudent: async function(studentId) {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return [
            {
                "id": 1,
                "class": {
                    "id": 1,
                    "name": "ML-C1"
                }
            }
        ]
    },
    getPublic: async function() {
        // add a delay to simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return []
    },
}