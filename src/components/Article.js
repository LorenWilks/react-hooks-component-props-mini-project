import React from "react"

function Article({title, date="January 1, 1970", preview, minutes}){
    return(
        <Article>
            <h3>
                {title}
            </h3>
            <small>
                {date}{minutes}
            </small>
            <p>
                {preview}
            </p>
        </Article>
    )
}

export default Article