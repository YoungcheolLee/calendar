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
const daysInMonth = 30;

const Calendar = () => {
  // 날짜 데이터 관리용 state
  const [calDate, setCalDate] = useState("");

  // 이전 버튼 기능
  const handleBoforeBtn = () => {};

  // 이후 버튼 기능
  const handleAfterBtn = () => {};

  //날짜 더미 데이터

  const getMonthArray = () => {
    const result = [];

    const numberOfRows = Math.ceil(daysInMonth / 7);
    console.log(`numberOfRows = ${numberOfRows}`);
    for (let i = 0; i < numberOfRows; i++) {
      const dayArray = [];
      for (let y = 1; y < 8; y++) {
        dayArray.push(y + i * 7);
      }
      result.push(
        <tr>
          {dayArray.map((item) => (
            <td>{item}</td>
          ))}
        </tr>
      );
    }
    return result;
  };

  // 요일별 데이터 출력 값

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
          <tbody>{getMonthArray()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
