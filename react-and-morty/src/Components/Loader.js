
const Loader = (props) => {
    return (
        <div className='container' ref={props.ref}>
            <div className='objects'>
                <div className="bar"></div>
                <div className="text">LOADING</div>
            </div>
        </div>
    );
};

export default Loader;