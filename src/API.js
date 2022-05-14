import axios from "axios";
import { config } from "./config";

export default class API {
  handleSearch = ({ name, associateId, skill }) => {
    let criteria = name
      ? { criteriaName: "name", criteriaValue: name }
      : associateId
      ? { criteriaName: "associateId", criteriaValue: associateId }
      : skill
      ? { criteriaName: "technicalSkills", criteriaValue: skill }
      : "";

    // this.mock
    //   .onGet(
    //     "http://localhost:8081/admin-service/skill-tracker/api/v1/admin/associateId/CTS12345"
    //   )
    //   .reply(200, [
    //     {
    //       profileId: 1,
    //       name: "Mark Dell",
    //       associateId: "CTS12345",
    //       email: "abc@xyz.com",
    //       mobile: "1234567891",
    //       technicalSkills: [
    //         { id: 1, name: "ANGULAR", level: 15 },
    //         { id: 2, name: "REACT", level: 16 },
    //         { id: 3, name: "SPRING", level: 15 },
    //         { id: 4, name: "RESTFUL", level: 16 },
    //       ],
    //       nonTechnicalSkills: [
    //         { id: 1, name: "SPOKEN", level: 16 },
    //         { id: 2, name: "COMMUNICATION", level: 16 },
    //         { id: 3, name: "APTITUDE", level: 17 },
    //       ],
    //       createdOn: 1652252514566,
    //       lastUpdatedOn: 1652252516859,
    //     },
    //     {
    //       profileId: 2,
    //       name: "Mark Dell",
    //       associateId: "CTS12345",
    //       email: "abc@xyz.com",
    //       mobile: "1234567891",
    //       technicalSkills: [
    //         { id: 5, name: "ANGULAR", level: 15 },
    //         { id: 6, name: "REACT", level: 16 },
    //         { id: 7, name: "SPRING", level: 15 },
    //         { id: 8, name: "RESTFUL", level: 16 },
    //       ],
    //       nonTechnicalSkills: [
    //         { id: 4, name: "SPOKEN", level: 16 },
    //         { id: 5, name: "COMMUNICATION", level: 16 },
    //         { id: 6, name: "APTITUDE", level: 17 },
    //       ],
    //       createdOn: 1652252592932,
    //       lastUpdatedOn: 1652252593176,
    //     },
    //     {
    //       profileId: 3,
    //       name: "Mark Dell",
    //       associateId: "CTS12345",
    //       email: "abc@xyz.com",
    //       mobile: "1234567891",
    //       technicalSkills: [
    //         { id: 9, name: "ANGULAR", level: 15 },
    //         { id: 10, name: "REACT", level: 16 },
    //         { id: 11, name: "SPRING", level: 15 },
    //         { id: 12, name: "RESTFUL", level: 16 },
    //       ],
    //       nonTechnicalSkills: [
    //         { id: 7, name: "SPOKEN", level: 16 },
    //         { id: 8, name: "COMMUNICATION", level: 16 },
    //         { id: 9, name: "APTITUDE", level: 17 },
    //       ],
    //       createdOn: 1652252841925,
    //       lastUpdatedOn: 1652252842136,
    //     },
    //   ]);

    return axios.get(
      `${config.APIURL}/${criteria.criteriaName}/${criteria.criteriaValue}`
    );
  };
}
