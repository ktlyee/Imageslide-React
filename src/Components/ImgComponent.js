import React from 'react'

function ImgComponent({src, index}) {
    const styles = {
        width: 100+"%",
        height: "auto"
    }
    return <img src={src} alt={`slide-${index}`} style={styles}/>
}

export default ImgComponent;