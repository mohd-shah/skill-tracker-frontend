import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkillRow from "./SkillRow";

describe("SkillRow", () => {
  test("SkillRow renders correctly", () => {
    let mockRow = {
      profileId: 1,
      name: "Mark Dell",
      associateId: "CTS12345",
      email: "abc@xyz.com",
      mobile: "1234567891",
      technicalSkills: [
        { id: 1, name: "ANGULAR", level: 15 },
        { id: 2, name: "REACT", level: 16 },
        { id: 3, name: "SPRING", level: 15 },
        { id: 4, name: "RESTFUL", level: 16 },
      ],
      nonTechnicalSkills: [
        { id: 1, name: "SPOKEN", level: 16 },
        { id: 2, name: "COMMUNICATION", level: 16 },
        { id: 3, name: "APTITUDE", level: 17 },
      ],
      createdOn: 1652252514566,
      lastUpdatedOn: 1652252516859,
    };
    render(<SkillRow row={mockRow} />);
    let basicDetailsHeader = screen.getByText("Basic Details");
    expect(basicDetailsHeader).toBeInTheDocument();
    expect(
      basicDetailsHeader.nextSibling.getElementsByTagName("tr").length
    ).toBe(4);
  });
});
