/**
 *packageName    :
 * fileName       : axios
 * author         : ipeac
 * date           : 2022-11-08
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-11-08        ipeac       최초 생성
 */
import axios from "axios";

const instance = axios.create({
    baseURL: "..."
});
/* node js 를 통해 promise api 를 이용한 비동기 통신 라이브러리이다.*/
/* axios.create => */
export default instance;
