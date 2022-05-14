import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchPanel from "./SearchPanel";

describe("SearchPanel", () => {
  test("SearchPanel renders correctly", () => {
    render(<SearchPanel />);
    expect(screen.getByText("Search Panel")).toBeInTheDocument();
  });

  test("Input works correctly", async () => {
    render(<SearchPanel />);
    userEvent.type(screen.getByLabelText("Name"), "Mark");
    expect(screen.getByLabelText("Name").value).toBe("Mark");
  });
});
