import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  /* 
    @pathVariable
    http://localhost:8080/diary/1 
    에서 동적으로 입력되는 값을 받아 온다
    route 에서 :id 라고 했기 때문에 id 로 받는다
  */
  const { id } = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
