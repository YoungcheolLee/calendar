/**
 * Calendar.js 설명
 *  - 달력 폼 생성
 *  - 달력 네비게이션 기능 및 선택한 시간에 해당하는 날짜 출력
 */

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDay();
console.log(day);

const Calendar = () => {
  return (
    <div>
      <h2>
        {year}년 {month}월
      </h2>
      <div>
        <table>
          <tr>
            <th>sun</th>
            <th>mon</th>
            <th>tue</th>
            <th>wed</th>
            <th>thu</th>
            <th>fri</th>
            <th>sat</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
