function Card({ image, selected, onClick }) {
    return (
        <div className="card">
            <div className={selected && "selected"}>
                <img alt="" src={image} className="card-face" />
                <img 
                    alt=""
                    src="/assets/back_v1.png"
                    className="card-back"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Card;