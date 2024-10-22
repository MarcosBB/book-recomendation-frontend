import React from "react"
import { useState } from "react"
import PropTypes from 'prop-types';

function SearchItem({ data }) {

    return (
        <div className="flex bg-white rounded-md p-4 gap-3">
            <img src={data.image} alt="Capa do livro" />
            <div className="flex flex-col justify-between w-full">
                <div>
                    <h3 className="text-2xl text-black">{data.title}</h3>

                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <div className="flex items-center justify-between gap-2 w-full">
                        <p className="text-gray-1 font-bold">R$ {data.price}</p>
                        <button>
                            <img src={data.favorite ? "/favorite-true.svg" : "/favorite-false.svg"} alt="favorite" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
SearchItem.propTypes = {
    data: PropTypes.any.isRequired,
};

export default function SearchList() {
    const [data] = useState([
        {
            id: 1,
            title: "Clean Code",
            price: 202.69,
            image: "/book-1.png",
            avaluation: 4,
            favorite: false,
            type: "Programming",
        },
        {
            id: 2,
            title: "The Pragmatic Programmer",
            price: 202.69,
            image: "/book-1.png",
            avaluation: 4,
            favorite: true,
            type: "Programming",
        },
        {
            id: 3,
            title: "Design Patterns",
            price: 202.69,
            image: "/book-1.png",
            avaluation: 4,
            favorite: true,
            type: "Programming",
        },
        {
            id: 4,
            title: "Refactoring",
            price: 202.69,
            image: "/book-1.png",
            avaluation: 4,
            favorite: false,
            type: "Programming",
        }
    ])

    return (
        <section className="grid grid-cols-2 gap-4">
            {
                data.map((item) => {
                    return <SearchItem key={item.id} data={item} />

                })
            }
        </section>

    )
}