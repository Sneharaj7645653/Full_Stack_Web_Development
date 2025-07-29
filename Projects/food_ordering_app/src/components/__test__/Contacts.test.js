import { render,screen } from "@testing-library/react";
import Contacts from "../Contacts";
import "@testing-library/jest-dom";


describe("contacts page test cases",()=>{
    test("Should load the contacts component", ()=>{
    render(<Contacts />);
    const heading = screen.getByText("📞 Contacts Page");
    expect(heading).toBeInTheDocument();
    });

    test("Should load the button component", ()=>{
        render(<Contacts />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("Should load three input boxes", ()=>{
        render(<Contacts />);
        const textbox = screen.getAllByRole("textbox");
        const len = textbox.length;
        expect(len).toBe(3);
    })

})
