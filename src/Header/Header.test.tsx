import { render, screen } from "@testing-library/react";
import { SetStateAction } from "react";
import { ILoginInfo } from "./Header.type";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

test("renders Header successful", () => {
  render(
    <BrowserRouter>
      <Header
        loginInfo={null}
        setLoginInfo={function (
          value: SetStateAction<ILoginInfo | null>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Funny Movies/i);
  expect(linkElement).toBeInTheDocument();
});
