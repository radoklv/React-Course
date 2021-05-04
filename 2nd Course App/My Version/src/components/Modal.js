const Modal = ({children, onClear}) => {
    return (
        <div className="modal_backdrop" onClick={onClear}>
            <div className="modal_content">
                <div className="modal_head">
                    <h2>Error</h2>
                </div>
                
                <div className="modal_body">
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
