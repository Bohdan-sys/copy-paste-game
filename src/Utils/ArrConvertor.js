export const generateMatrix = (count) => {
    return Array.from({ length: count },
        () => new Array(count).fill({}));
}



