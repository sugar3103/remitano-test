import { render, screen } from "@testing-library/react";
import Layout from "./index";

test("renders Layout component successful", () => {
  render(<Layout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
