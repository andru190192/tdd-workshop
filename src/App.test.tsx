import React from "react";
import { act, render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import * as UserService from "./services/user.service";

describe("App Component", () => {
  it("should render correctly", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText("3 + 5")).toBeInTheDocument();
    expect(screen.getByText("Sumar").closest("button")).toBeInTheDocument();
    expect(screen.getByText("Ver Perfil GitHub")).toBeInTheDocument();
  });

  it("should display the sum result when click on add button", () => {
    render(<App />);

    expect(screen.getByText("3 + 5")).toBeInTheDocument();

    const addBtn = screen.getByText("Sumar") as HTMLButtonElement;

    fireEvent.click(addBtn);

    expect(screen.getByText("8")).toBeInTheDocument();
  });

  it("should display the user info when click on github profile button", async () => {
    // Arrange
    vi.spyOn(UserService, "getUserProfile").mockReturnValue(
      Promise.resolve({
        name: "Andres Guachisaca",
        avatar_url: "https://avatars.githubusercontent.com/u/8331153?v=4",
        location: "Quito",
      })
    );

    // Act
    render(<App />);

    const githubProfileBtn = screen.getByText(
      "Ver Perfil GitHub"
    ) as HTMLButtonElement;

    await act(async () => {
      fireEvent.click(githubProfileBtn);
    });

    // Asserts
    expect(screen.getByText("Andres Guachisaca")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/8331153?v=4"
    );
    expect(screen.getByText("Quito")).toBeInTheDocument();
  });
});
