import praktikakohvik2023_1 from '../assets/img/png/PK2023_2.jpg'
import praktikakohvik2022_2 from '../assets/img/png/PK2022_3.jpg'
import praktikakohvik2023_3 from '../assets/img/png/PK2023_4.jpg'
import praktikakohvik2022_4 from '../assets/img/png/PK2022_5.jpg'
import praktikakohvik2023_5 from '../assets/img/png/PK2023_6.jpg'
import praktikakohvik2022_6 from '../assets/img/png/PK2022_7.jpg'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Gallery = () => {
    const [ firstSetOfImages, imageSet ] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            imageSet(imageSet => !imageSet)
        }, 13000);
        return () => clearInterval(interval)
    }, []);

    return (
        <GalleryContainer>
            <div className='container-questions image'>
                <img style={firstSetOfImages ? { opacity: '1' } : { opacity: '0' } } src={praktikakohvik2023_1} alt="Praktikakohvik 2023"/>
                <img style={firstSetOfImages ? { opacity: '0' } : { opacity: '1' } } src={praktikakohvik2022_4} alt="Praktikakohvik 2022"/>
            </div>
            <div className='container-questions image'>
                <img style={firstSetOfImages ? { opacity: '1' } : { opacity: '0' } } src={praktikakohvik2022_2} alt="Praktikakohvik 2022"/>
                <img style={firstSetOfImages ? { opacity: '0' } : { opacity: '1' } } src={praktikakohvik2023_5} alt="Praktikakohvik 2023"/>
            </div>
            <div className='container-questions image'>
                <img style={firstSetOfImages ? { opacity: '1' } : { opacity: '0' } } src={praktikakohvik2023_3} alt="Praktikakohvik 2023"/>
                <img style={firstSetOfImages ? { opacity: '0' } : { opacity: '1' } } src={praktikakohvik2022_6} alt="Praktikakohvik 2022"/>
            </div>
        </GalleryContainer>
    )
};

export default Gallery;

const GalleryContainer = styled.div`
    margin-top: 40px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .image {
        position: relative;
        width: 390px;
        height: 279px;
        overflow: hidden;
        object-fit: cover;
        display: flex;
        align-items: center;
        border-radius: 10px;
    }

    img {
        position: absolute;
        height: 279px;
        border-radius: 10px;
        transition: opacity 0.5s;
    }

    @media all and (max-width: 700px) {
        .image {
            width: 300px;
            height: 200px;
        }
    }
`