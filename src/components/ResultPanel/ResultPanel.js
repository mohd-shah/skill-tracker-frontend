import React, { PureComponent } from "react";
import SkillRow from "./SkillRow/SkillRow";

export default class ResultPanel extends PureComponent {
  
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((row) => (
          <SkillRow row={row} key={row.profileId}></SkillRow>
        ))}
      </>
    );
  }
}
