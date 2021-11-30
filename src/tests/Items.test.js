import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { Items } from '../components/Items';
import  { render } from '@testing-library/react';

test('render content', () => {
    const products = {
        contentName: "name",
        contentPrice: "price"
    }
    const component = render(<Items products={products} />);

    component.debug()

    
})