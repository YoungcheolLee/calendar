import { useState } from "react";

/**
 * Calendar.js 설명
 *  - 달력 폼 생성
 *  - 달력 네비게이션 기능 및 선택한 시간에 해당하는 날짜 출력
 */

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
console.log(`today=${day}일`);

const Calendar = () => {
  // 날짜 데이터 관리용 state
  const [calDate, setCalDate] = useState("");

  // 이전 버튼 기능
  const handleBoforeBtn = () => {};

  // 이후 버튼 기능
  const handleAfterBtn = () => {};

  //날짜 더미 데이터
  const dummyData = () => {
    const myArray = [];
    for (let i = 1; i < 32; i++) {
      myArray.push(i);
    }
    return myArray;
  };
  console.log(dummyData());

  const myArr = [
    {
      Sun: dummyData().slice(0, 7),
      Mon: dummyData().slice(7, 14),
      Thu: dummyData().slice(14, 21),
      Wed: dummyData().slice(21, 28),
      Thr: dummyData().slice(28, 35),
      Fri: dummyData().slice(35, 42),
      Sat: dummyData().slice(42, 49),
    },
  ];

  // const myArray = [
  //   {
  //     myArr: dummyData().filter((item, idx) => {
  //       return idx % 7 === 0 ? item : false;
  //     }),
  //     myArr2: dummyData().filter((item, idx) => {
  //       return idx % 7 === 1 ? item : false;
  //     }),
  //     myArr3: dummyData().filter((item, idx) => {
  //       return idx % 7 === 2 ? item : false;
  //     }),
  //     myArr4: dummyData().filter((item, idx) => {
  //       return idx % 7 === 3 ? item : false;
  //     }),
  //     myArr5: dummyData().filter((item, idx) => {
  //       return idx % 7 === 4 ? item : false;
  //     }),
  //     myArr6: dummyData().filter((item, idx) => {
  //       return idx % 7 === 5 ? item : false;
  //     }),
  //     myArr7: dummyData().filter((item, idx) => {
  //       return idx % 7 === 6 ? item : false;
  //     }),
  //   },
  // ];

  return (
    <div>
      <div>
        <button className="beforeBtn" onClick={handleBoforeBtn}>
          ◀
        </button>
        <h2>
          {year}년 {month}월
        </h2>
        <button className="afterBtn" onClick={handleAfterBtn}>
          ▶
        </button>
      </div>
      <div>
        <table className="calTable">
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {myArr.map((element, idx) => (
              <tr key={idx}>
                <td>{element.Sun}</td>
                <td>{element.Mon}</td>
                <td>{element.Thu}</td>
                <td>{element.Wed}</td>
                <td>{element.Thr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
