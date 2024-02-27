import Header from "../Header";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

test("should load Header component with a cart with 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  const cartItems = screen.getByText("Cart(0 Items)");

  expect(cartItems).toBeInTheDocument();
});

test("should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const LogoutButton = screen.getByRole("button", { name: "Logout" });
  expect(LogoutButton).toBeInTheDocument();
});
