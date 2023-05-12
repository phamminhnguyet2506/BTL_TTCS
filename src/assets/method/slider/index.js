import { useState } from 'react';

function Slider(props) {
    const imgArray = [];

    const [img, setImg] = useState(imgArray[1]);

    const handleClickBack = () => {
        let i = imgArray.indexOf(img);
        if (i === 0) {
            setImg(imgArray[imgArray.length - 1]);
        } else {
            setImg(imgArray[i - 1]);
        }
    };

    const handleClickOn = () => {
        let i = imgArray.indexOf(img);
        if (i === imgArray.length - 1) {
            setImg(imgArray[0]);
        } else {
            setImg(imgArray[i + 1]);
        }
    };

    return null;
}

export default Slider;
