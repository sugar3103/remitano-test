import { render, screen } from "@testing-library/react";
import MainRoute from ".";

test("renders Main Route successful", () => {
  render(<MainRoute loginInfo={null} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
