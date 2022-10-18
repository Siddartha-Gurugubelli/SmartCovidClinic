/* eslint-disable react/jsx-no-undef */
import { render, screen } from "@testing-library/react";
import BrowserRouter from 'react-router-dom';
import Patient from './wPatient';


describe("component", () => {

    it("rendered username", () => {
        render(<BrowserRouter><Patient /></BrowserRouter>);
        const input = screen.getByTestId("title");
        expect(input).toBeTruthy();
    });

})