import { motion } from "framer-motion";

const Content = (props) => {
    return (
        <div className="grid overflow-hidden md:gird-cols-0 sm:grid-rows-6 sm:grid-cols-none grid-cols-3 grid-rows-none gap-4">
            {props.props.slice(0, 9).map((character) => (
                <motion.div
                    key={character.id}
                    className="rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="card" key={character.id}>
                        <div className="flex border-2 flex-col mt-8 text-black items-center justify-end cursor-pointer rounded-md bg-white overflow-hidden">
                            <img
                                className="rounded-tl-md rounded-tr-md w-full object-cover"
                                src={character.image}
                                alt={character.name}
                            />
                            <h2>{character.name}</h2>
                            <div className="flex  justify-end items-center  text-sm gap-6 m-4">
                                <h3 className=" bg-blue-400 uppercase text-black  rounded-3xl p-2">
                                    {character.status}
                                </h3>
                                <h3 className=" bg-blue-400 uppercase text-black  rounded-3xl p-2">
                                    {character.gender}
                                </h3>
                                <h3 className=" bg-blue-400 uppercase text-black  rounded-3xl p-2">
                                    {character.species}
                                </h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Content;
