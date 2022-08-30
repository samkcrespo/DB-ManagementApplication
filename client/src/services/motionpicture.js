export const getMotionPictures = async () => {
    const response = await fetch('MotionPictures');
    if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
    }
    const motionpictures = await response.json();
    return motionpictures;

}

export const updateMotionPicture = async (motionpicture) => {
    const response = await fetch(`MotionPictures/${motionpicture.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(motionpicture)
    });
    const result = await response.json();
    return result;
}

export const addMotionPicture = async (motionpicture) => {
    const response = await fetch('MotionPictures', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
     
        body: JSON.stringify(motionpicture)
    });
    const result = await response.json();
    return result;
}

export const deleteMotionPicture = async (id) => {
    const response = await fetch(`MotionPictures/${id}`, {
        method: 'DELETE'
       
    });
    const result = await response.json();
    return result;
}