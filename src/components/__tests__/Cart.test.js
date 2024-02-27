import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load the RestaurantMenu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Value Meals(15)");

  expect(accordianHeader).toBeInTheDocument();

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  //   console.log(addBtn.length);

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart(1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart(2 Items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(17); //15(already erndered foodItems)+2

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  expect(screen.getByText("Cart is empty. Add Items to the cart!"));
});
