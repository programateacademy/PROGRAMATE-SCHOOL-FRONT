import React from 'react'

export default function Modal({ visible, onClose }) {

    const handleOnClose = (e) => {
        if (e.target.id === 'box')
        onClose()
    }

    if (!visible) return null
    
    return (
        <div id='box' onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-2 rounded w-9/12 h-screen md:6/12 overflow-y-scroll">
                <button onClick={onClose} className="px-5 py-2 bg-gray-700 text-white rounded">X</button>
                <h1 className="font-semibold text-center text-gray-700">
                Teminos y condiciones
                </h1>
                <p className="text-center text-xs text-gray-700 mb-5">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sagittis luctus dis facilisi odio aliquet integer cursus, enim dapibus etiam cum molestie tristique. Semper augue hac cursus aliquam rhoncus gravida facilisi litora bibendum, tristique vehicula ornare mauris tincidunt nam aptent orci libero molestie, integer quam mollis pharetra nunc montes erat mus. Sollicitudin dictum habitant cursus lectus aliquet arcu neque tristique hendrerit, egestas vitae netus rhoncus magnis interdum himenaeos ornare quam consequat, nostra dignissim cras leo molestie vivamus convallis lobortis.

                    Fringilla cum nostra integer litora hendrerit euismod orci phasellus, erat nullam duis at taciti quam mi. Varius conubia nec sociis nascetur fermentum interdum ultrices, eros porttitor nibh cursus fringilla hendrerit eu, condimentum pharetra facilisi congue eleifend mollis. Dictumst arcu lobortis sed tempor pretium dui elementum accumsan mollis, pellentesque magnis euismod in turpis ad potenti lacus taciti nascetur, nec nunc dignissim nisi orci phasellus consequat blandit.

                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sagittis luctus dis facilisi odio aliquet integer cursus, enim dapibus etiam cum molestie tristique. Semper augue hac cursus aliquam rhoncus gravida facilisi litora bibendum, tristique vehicula ornare mauris tincidunt nam aptent orci libero molestie, integer quam mollis pharetra nunc montes erat mus. Sollicitudin dictum habitant cursus lectus aliquet arcu neque tristique hendrerit, egestas vitae netus rhoncus magnis interdum himenaeos ornare quam consequat, nostra dignissim cras leo molestie vivamus convallis lobortis.

Fringilla cum nostra integer litora hendrerit euismod orci phasellus, erat nullam duis at taciti quam mi. Varius conubia nec sociis nascetur fermentum interdum ultrices, eros porttitor nibh cursus fringilla hendrerit eu, condimentum pharetra facilisi congue eleifend mollis. Dictumst arcu lobortis sed tempor pretium dui elementum accumsan mollis, pellentesque magnis euismod in turpis ad potenti lacus taciti nascetur, nec nunc dignissim nisi orci phasellus consequat blandit.
Lorem ipsum dolor sit amet consectetur adipiscing elit, sagittis luctus dis facilisi odio aliquet integer cursus, enim dapibus etiam cum molestie tristique. Semper augue hac cursus aliquam rhoncus gravida facilisi litora bibendum, tristique vehicula ornare mauris tincidunt nam aptent orci libero molestie, integer quam mollis pharetra nunc montes erat mus. Sollicitudin dictum habitant cursus lectus aliquet arcu neque tristique hendrerit, egestas vitae netus rhoncus magnis interdum himenaeos ornare quam consequat, nostra dignissim cras leo molestie vivamus convallis lobortis.

Fringilla cum nostra integer litora hendrerit euismod orci phasellus, erat nullam duis at taciti quam mi. Varius conubia nec sociis nascetur fermentum interdum ultrices, eros porttitor nibh cursus fringilla hendrerit eu, condimentum pharetra facilisi congue eleifend mollis. Dictumst arcu lobortis sed tempor pretium dui elementum accumsan mollis, pellentesque magnis euismod in turpis ad potenti lacus taciti nascetur, nec nunc dignissim nisi orci phasellus consequat blandit.
                    </p>
            </div>
        </div>
    )
}