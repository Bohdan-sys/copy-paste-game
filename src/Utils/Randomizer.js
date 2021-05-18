import { emojiList } from './EmojiList'

export const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const randomId = () => Math.random().toString(36).substring(7);

export const randomDegree = (angle = [90, 180, 270, 360, 450, 540, -90]) => angle[Math.floor(Math.random() * angle.length)]

export const randomEmoji = (array = emojiList) => {
    let arr;
    let random = () => Math.floor(Math.random() * arr.length);
    let initArray = () => arr = emojiList.slice();
    initArray();
    let composedArray = () => {
        if (arr.length === 0) {
            return initArray()
        } else {
            return arr.splice(random(), 1)[0];
        }
    }
    return composedArray()
}


