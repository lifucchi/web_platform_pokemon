import React from "react";
import reactDom from "react-dom";
import { render , screen } from '@testing-library/react';

import App from '../App'

test('tes', () => {
    render(<App/>);
    const linkElemen = screen.getByText(/learn-react/i);
    expect(linkElemen).toBeInTheDocument();
})