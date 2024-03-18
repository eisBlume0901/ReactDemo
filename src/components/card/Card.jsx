
const Cards = (props) => {
    return (
        <div className="card bg-[#00B4D8] p-4 rounded-lg max-w-screen-sm mt-3 mx-auto">
            <div className="card-header text-white">
                <img
                    className="mx-auto my-3 rounded-lg w-full h-44 object-cover object-center"
                    src={props.image} />
                <div className="card-body">
                    <h1 className="text-lg font-bold">{props.title}</h1>
                    <p>
                        {props.body}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cards;