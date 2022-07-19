import {fireEvent, render, screen} from "@testing-library/react";
import InputField from "./InputField";
import {act} from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';

test("it blurs on submit", () => {
    const callback = jest.fn();
    render(<InputField handleAdd={callback} />)
    const inputElement = screen.getByTestId("InputFieldInput") //get input element by its test id

    //fireEvent.mouseDown(inputElement) - doesn't seem to put focus on inputElement
    //fireEvent.focus(inputElement) //- this doesn't work, maybe the focus is nly temporary?
    //inputElement.click() also doesn't work

    inputElement.focus() //I guess this works, it looks like fireEvent.click only fires a click event and not a focus event
    fireEvent.change(inputElement, {target: {value: 'insert value here'}})

    expect(inputElement).toHaveFocus()

    const buttonElement = screen.getByText("Go") //get input element by its test id

    act(() => buttonElement.click())

    expect(inputElement).not.toHaveFocus()
})

test("it clears the input text on submit", () => {
    const callback = jest.fn();
    render(<InputField handleAdd={callback} />)
    const inputElement = screen.getByTestId("InputFieldInput") //get input element by its test id

    fireEvent.change(inputElement, {target: {value: 'insert value here'}})
    const buttonElement = screen.getByText("Go") //get input element by its test id

    act(() => buttonElement.click())

    expect(inputElement.value).toBe('')
})

test("it calls the callback with the text on submit", () => {
    const callback = jest.fn();
    render(<InputField handleAdd={callback} />)
    const inputElement = screen.getByTestId("InputFieldInput") //get input element by its test id

    fireEvent.change(inputElement, {target: {value: 'insert value here'}})
    const buttonElement = screen.getByText("Go") //get input element by its test id

    act(() => buttonElement.click())

    expect(callback).toBeCalledWith("insert value here")
})