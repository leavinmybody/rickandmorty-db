const Content = (props) => {
    return (
        <div className="grid overflow-hidden md:gird-cols-0 sm:grid-rows-6 sm:grid-cols-none grid-cols-3 grid-rows-none gap-2">
            {props.props.slice(0, 9).map((character) => (
                <div className="card" key={character.id}>
                    <div className="flex border-2 flex-col mt-8 text-black items-center justify-end cursor-pointer rounded-md bg-white overflow-hidden">
                        <img
                            className="rounded-tl-md rounded-tr-md w-full object-cover"
                            src={character.image}
                            alt={character.name}
                        />
                        <h2>{character.name}</h2>
                        <p>{character.species}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;
