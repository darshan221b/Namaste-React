import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should appear on render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/dummy.jpeg");
  console.log(logo);
});

test("Online status should be green on render", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("✅");
    console.log(onlineStatus);
  });

  test("Cart should have zero items on render", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 0 items");
    console.log(cart);
  });
