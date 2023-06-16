import { render, screen } from "@testing-library/react";
import MainPage from ".";

test("renders Main Page component successful", () => {
  render(<MainPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
