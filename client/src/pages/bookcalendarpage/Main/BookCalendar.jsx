import React, { useCallback, useEffect, useState } from 'react';
import classNames from "classnames/bind";
import S from './style';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../../api/apiClient';

const cx = classNames.bind(S);

const BookCalendar = () => {
    const navigate = useNavigate();
    const today = {
        year: new Date().getFullYear(), //오늘 연도
        month: new Date().getMonth()+1, //오늘 월
        date: new Date().getDate(), //오늘 날짜
        day: new Date().getDay(), //오늘 요일
    };

    const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]; //일주일
    const [selectedYear, setSelectedYear] = useState(today.year); //현재 선택된 연도
    const [selectedMonth, setSelectedMonth] = useState(today.month); //현재 선택된 달
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); 
    const [calendarData, setCalendarData] = useState([]);

    const fetchCalendarData =useCallback(async () => {
      const accessToken = localStorage.getItem('accessToken'); 
  
      apiClient
          .get(`/v1/board/calendar/books?year=${selectedYear}&month=${selectedMonth}`, {
              headers: {
                  Authorization: `Bearer ${accessToken}` 
              }
          })
          .then((response) => {
            console.log(response.data.data);
            setCalendarData(response.data.data);
          })
          .catch((error) => {
              console.error('Error fetching calendar:', error);
          });
  }, [selectedYear, selectedMonth]);

useEffect(() => {
        fetchCalendarData();
    }, [fetchCalendarData]);

      //이전 달 보기 보튼
      const prevMonth = useCallback(() => {
        if (selectedMonth === 1) {
          setSelectedMonth(12);
          setSelectedYear(selectedYear - 1);
          if(selectedYear===2024){
            setSelectedYear(2028);
          }
        } else {
          setSelectedMonth(selectedMonth - 1);
        }
      }, [selectedMonth]);
      
      //다음 달 보기 버튼
      const nextMonth = useCallback(() => {
        if (selectedMonth === 12) {
          setSelectedMonth(1);
          setSelectedYear(selectedYear + 1);
          if(selectedYear===2028){
            setSelectedYear(2024);
          }
        } else {
          setSelectedMonth(selectedMonth + 1);
        }
      }, [selectedMonth]);
    
    //달 선택박스에서 고르기
    const monthControl = useCallback(() => {
        let monthArr = [];
        for (let i = 0; i < 12; i++) {
          monthArr.push(
            <option key={i + 1} value={i + 1}>
              {i + 1}월
            </option>
          );
        }
        return (
          <select className="monthSelect" onChange={changeSelectMonth} value={selectedMonth}>
            {monthArr}
          </select>
        );
    }, [selectedMonth]);

    //연도 선택박스에서 고르기
    const yearControl = useCallback(() => {
        let yearArr = [];
        const startYear = today.year; 
        const endYear = today.year+4; 
        for (let i = startYear; i < endYear + 1; i++) {
          yearArr.push(
            <option key={i} value={i}>
              {i}년
            </option>
          );
        }
        return (
          <select
            onChange={changeSelectYear}
            value={selectedYear}
          >
            {yearArr}
          </select>
        );
      }, [selectedYear]);
    
      const changeSelectMonth = (e) => {
        setSelectedMonth(Number(e.target.value));
      };
      const changeSelectYear = (e) => {
        setSelectedYear(Number(e.target.value));
      };

      //요일 반환 함수
      const returnWeek = useCallback(() => {
        let weekArr = [];
        week.forEach((v) => {
          weekArr.push(
            <div key={`week-${v}`} className='weekday'>{v}</div>
          );
        });
        return weekArr;
      }, []);

      
      const handleDateClick = (date) => {
        const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
        const entry = calendarData.find((data) => data.date === formattedDate); // 해당 날짜 데이터 확인
    
        if (!entry) {
            // 에세이가 없는 경우
            alert('해당 날짜에 에세이를 작성하지 않았습니다.');
            return;
        }
    
        // 에세이가 있는 경우 상세 페이지로 이동
        navigate(`/bookcalendar/detail?date=${formattedDate}`);
    };
    
      
    const returnDay = useCallback(() => {
      let dayArr = [];
      const firstDay = new Date(selectedYear, selectedMonth - 1, 1).getDay(); // 선택한 달의 첫날 요일
  
      // 첫째 줄 빈 칸 채우기 (달력 시작 날짜 전의 빈 요일들)
      for (let i = 0; i < firstDay; i++) {
          dayArr.push(<div key={`empty-${i}`} className="weekday empty"></div>);
      }
  
      // 달의 모든 날짜를 렌더링
      for (let i = 1; i <= dateTotalCount; i++) {
          const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
          const entry = calendarData.find((data) => data.date === formattedDate); // calendarData에서 날짜 데이터 찾기
  
          const hasData = !!entry; // 날짜에 데이터가 있는지 확인
          const bookCoverUrl = entry?.books[0]?.bookCoverUrl || null; // books[0]의 bookCoverUrl 가져오기
          const additionalBooks = entry?.books.length > 1 ? entry.books.length - 1 : 0; // 추가 책 개수 계산
  
          dayArr.push(
            <div
                key={`day-${i}`}
                className={cx('weekday', {
                    today: today.year === selectedYear && today.month === selectedMonth && today.date === i,
                    hasData,
                })}
                onClick={() => handleDateClick(i)}
            >
                <div className="day-number">{i}</div>
        
                {/* 책 이미지 */}
                {bookCoverUrl && (
                    <div>
                        <img src={bookCoverUrl} alt={`Book Cover for ${formattedDate}`} />
                        {additionalBooks > 0 && <span className="additional-books">+{additionalBooks}</span>}
                    </div>
                )}
            </div>
        );
        
      }
  
      return dayArr;
  }, [selectedYear, selectedMonth, dateTotalCount, calendarData]);
  
      
      //선택된 달의 날짜들 반환 함수
      // const returnDay = useCallback(() => {
      //   let dayArr = [];
       
        
      //   for (const nowDay of week) {
      //     const day = new Date(selectedYear, selectedMonth - 1, 1).getDay();
      //     if (week[day] === nowDay) {
      //       for (let i = 0; i < dateTotalCount; i++) {
      //         const formattedDate = `${selectedYear}-${selectedMonth}-${i + 1}`;
      //         const hasData = calendarData.some(data => data.createdAt === formattedDate);
      //         // const isBookDate = selectedMonth === 11 && i + 1 === 1; 
      //         dayArr.push(
      //           <div key={`day-${i + 1}`} 
      //           className={cx(
      //             'weekday',
      //               {
      //                 //오늘 날짜일 때 표시할 스타일 클라스네임
      //                 today: today.year === selectedYear &&today.month === selectedMonth &&today.date === i + 1,
      //                 hasData: hasData,
      //               }
                    
      //              )}
      //             //  onClick={() => handleClick(i+1)} // 날짜 클릭 핸들러

      //           >
      //             {i + 1}
      //             {/* {hasData && <div className="dot" />} */}
                  
      //           </div>
      //         );
      //       }
      //     } else {
      //       dayArr.push(<div className="weekday" key={`weekday-${nowDay}`}></div>);
      //     }
      //   }
    
      //   return dayArr;
      // }, [selectedYear, selectedMonth, dateTotalCount, calendarData]);

    return (
        <div>
            <S.Background>
                {/* <S.LineWrapper>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                </S.LineWrapper> */}
                <S.Title>
                    <S.TitleHightLight>
                      <img src={process.env.PUBLIC_URL + '/global/images/bookcalendar/bookCalendarHightlight.png'}/>
                    </S.TitleHightLight>
                    <div></div>
                </S.Title>
                
                <S.CalendarContainer>
                    
                    <S.CalendarHeadContainer>
                            
                        <S.SelectWrapper>
                            {yearControl()} {monthControl()}
                        </S.SelectWrapper>
                                
                        <S.ArrowsWrapper >
                            
                                <button onClick={prevMonth}>&lt; </button>
                                <div>ㅣ</div>
                                <button onClick={nextMonth}>&gt;</button>
                            
                        </S.ArrowsWrapper>
                        
                    </S.CalendarHeadContainer>
                    
                    <S.CalendarBodyContainer>
                    
                        <S.WeekWrapper>
                        <div className="week">{returnWeek()}</div>
                        </S.WeekWrapper>
                        
                        <S.DateWrapper>
                        <div className="date">{returnDay()}</div>
                        </S.DateWrapper>
                    </S.CalendarBodyContainer>
                    
                        
                </S.CalendarContainer>

            </S.Background>
        </div>
    );
};

export default BookCalendar;