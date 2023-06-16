import { render, screen } from "@testing-library/react";
import { SetStateAction } from "react";
import { ILoginInfo } from "./Header.type";
import Header from ".";

test("renders Header successful", () => {
  render(
    <Header
      loginInfo={null}
      setLoginInfo={function (value: SetStateAction<ILoginInfo | null>): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
