export const getMotionPictures = async () => {
    const response = await fetch('https://localhost:7007/MotionPictures');
    const motionpictures = await response.json();
    return motionpictures;
}

export const updateMotionPicture = async (motionpicture) => {
    const response = await fetch(`https://localhost:7007/MotionPictures${motionpicture.id}`, {
        method: 'PATCH',
        body: JSON.stringify(motionpicture)
    });
    const result = await response.json();
    return result;
}

export const addMotionPicture = async (motionpicture) => {
    const response = await fetch('https://localhost:7007/MotionPictures', {
        method: 'POST',
        body: JSON.stringify(motionpicture)
    });
    const result = await response.json();
    return result;
}

export const deleteMotionPicture = async (id) => {
    const response = await fetch(`https://localhost:7007/MotionPictures${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    return result;
}