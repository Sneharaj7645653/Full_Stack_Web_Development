import { render,screen } from "@testing-library/react";
import Contacts from "../Contacts";
import "@testing-library/jest-dom";

test("Should load the contacts component", ()=>{
    render(<Contacts />);
    const heading = screen.getByText("📞 Contacts Page");
    expect(heading).toBeInTheDocument();
});

test("Should load the contacts component", ()=>{
    render(<Contacts />);
    const heading = screen.getByText("📞 Contacts Page");
    expect(heading).toBeInTheDocument();
})
