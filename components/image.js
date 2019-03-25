import { useState } from 'react'
import css from 'styled-jsx/css'
import Loader from '../loader'

const style = css`
    figure {
        display: block;
        margin: 0;
        padding: 12px;
        background-color: #e9e9e9;
        text-align: center;
    }

    img {
        max-width: 100%;
        opacity: 0;
        pointer-events: none;
        transition: 500ms opacity;
    }

    .isLoaded {
        opacity: 1;
        pointer-events: all;
    }

    figcaption {
        padding-top: 8px;
    }

    .preview {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: #000;
        opacity: 0;
        overflow: hidden;
        pointer-events: none;
        transition: 500ms opacity;
    }

    .isPreview {
        opacity: 1;
        pointer-events: all;
    }

    .previewContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 1024px;
        max-height: 1024px;
        pointer-events: none;
        z-index: 1;
    }

    .previewImage {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        pointer-events: none;
    }

    .previewCaption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: rgba(0, 0, 0, 0.8);
        color: #777;
        pointer-events: none;
    }

    .previewClose {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 14px;
        color: #777;
        pointer-events: none;
        z-index: 2;
    }

`

export default ({ image, caption }) => {
    const path = `/static/images/${image}.jpg`
    const [source, setSource] = useState()
    const [isLoaded, setLoaded] = useState(false)
    const [isPreview, setPreview] = useState(false)

    if (process.browser) {
        const image = new Image();

        image.onload = () => {
            setSource(path)
            setLoaded(true)
        }

        image.src = path;
    }

    const onClick = () => {
        setPreview(!isPreview)
    }

    return (
        <figure>
            <img
                src={source}
                alt={image}
                onClick={onClick}
                className={`${isLoaded && css.isLoaded}`} />

            <Loader visible={!isLoaded} />

            <div onClick={onClick} className={`${css.preview} ${isPreview && css.isPreview}`}>
                <div className={css.previewContainer}>
                    <img
                        src={source}
                        alt={image}
                        className={css.previewImage} />
                    <cite className={css.previewCaption}>{caption}</cite>
                </div>
                <a className={css.previewClose}>
                    Click to close (x)
                </a>
            </div>

            {!!caption && (
                <figcaption>
                    <cite>{caption}</cite>
                </figcaption>
            )}

            <style jsx>{style}</style>
        </figure>
    )
}
