import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { Items } from '../components/Items';
import { fireEvent, render } from '@testing-library/react';
// import { MockData } from './MockData';

test('Renderizado', () => {
    const dataFake = {
        id: "1",
        name: "Café americano",
        price: 5,
        type: "desayuno",
        imges: "https://fonts.google.com/icons?selected=Material%20Icons%3Acoffee%3A"
    }

    const addProduct = jest.fn()
    const component = render(<Items product={dataFake}  addProductToCommand={addProduct} />)

    component.debug()

    const button = component.getByText('Añadir')
    fireEvent.click(button)
    expect(addProduct).toHaveBeenCalledTimes(1)
})


test('Renderizado de Data', () => {

})


