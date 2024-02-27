import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test case", () => {
  //   beforeAll(() => {
  //     console.log("BeforeAll");
  //   });

  //   beforeEach(() => {
  //     console.log("BeforeEach");
  //   });

  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    //   const button = screen.getByText("Submit");
    const button = screen.getByPlaceholderText("name");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load 2 input boxes inside contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes[0]);

    //   inputBoxes.forEach((input) => expect(input).toBeInTheDocument());

    expect(inputBoxes.length).toBe(2);
    //   expect(inputBoxes.length).not.toBe(3);
  });

  //   afterEach(() => {
  //     console.log("AfterEach");
  //   });

  //   afterAll(() => {
  //     console.log("AfterAll");
  //   });
});
