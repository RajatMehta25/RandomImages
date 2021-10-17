import React from 'react'

function Display(props) {
    const img=`https://source.unsplash.com/1000x500/?${props.name}`;
    return (
        <>
            <div >
                <img className="Image" src={img} alt="Result" />
            </div>
        </>
    )
}

export default Display
