import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./index";

test("renders Layout component successful", () => {
  render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Funny Movies/i);
  expect(linkElement).toBeInTheDocument();
});
