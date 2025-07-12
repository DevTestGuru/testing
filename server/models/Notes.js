let lastTimestamp = 0;
let counter = 0;

function generateUniqueId() {
    // A very crude way to generate a unique id for the note but it's good enough for now
    const now = Date.now();
    if (now !== lastTimestamp) {
        lastTimestamp = now;
        counter = 0;
    } else {
        counter++;
    }
    return `${now}-${counter}`;
}

module.exports = function (title, content, userId) {
    return {
        id: generateUniqueId(),
        title,
        content,
        userId,
        createdAt: new Date(),
        updatedAt: null
    }
}