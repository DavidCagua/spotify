import http from "./common-api";
// import ITutorialData from "../types/tutorial.type";
class TutorialDataService {
  get() {
    return http.get("");
  }
}
export default new TutorialDataService();
