import { render, screen } from "@testing-library/react";
import SharePage from ".";
import { BrowserRouter } from "react-router-dom";

test("renders Main Page component successful", () => {
  render(
    <BrowserRouter>
      <SharePage loginInfo={null} />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Please Login to share/i);
  expect(linkElement).toBeInTheDocument();
});
