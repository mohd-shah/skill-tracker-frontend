import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe("App", () => {
  test("App renders correctly", () => {
    render(<App />);
    expect(screen.getByText("Skill Tracker")).toBeInTheDocument();
  });

  test("Search works correctly", async () => {
    render(<App />);
    userEvent.type(screen.getByLabelText("Name"), "Mark");
    userEvent.click(screen.getByText("Search"));
    let basicDetailsHeader = await screen.findAllByText("Basic Details");
    expect(basicDetailsHeader).toHaveLength(2);
  });
});
