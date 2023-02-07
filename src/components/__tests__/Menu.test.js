import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to cart", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(menu.getByTestId("menu")));

  const addItem = menu.getAllByTestId("add-menu");

  fireEvent.click(addItem[0]);
  fireEvent.click(addItem[1]);

  const cart = menu.getByTestId("cart");

  expect(cart.innerHTML).toEqual("Cart - 2 items");
});
