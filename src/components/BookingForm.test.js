import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

// test('Renders static label "Date"', () => {
//     render(<BookingForm />);
//     const labelElement = screen.getByText("Date:");
//     expect(labelElement).toBeInTheDocument();
// })