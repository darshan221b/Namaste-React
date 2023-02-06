import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import { lazy, Suspense, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const queryClient = new QueryClient();

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Darshan",
    email: "darshan@example.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const InstaMart = lazy(() => import("./components/Instamart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={appRouter} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
