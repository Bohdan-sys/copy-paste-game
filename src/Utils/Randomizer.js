export const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const randomId = () => Math.random().toString(36).substring(7);

export const randomDegree = (angle = [90, 180, 270, 360, 450, 540, -90]) => angle[Math.floor(Math.random() * angle.length)]



