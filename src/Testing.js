const Testing = (props) => {

    const handleClick = (e) => {
        props.handleClick();
    }

    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <section>{props.sectionText}</section>
            <button onClick={handleClick}>
                {props.title} button
            </button>
        </div>
    )
}

export default Testing;