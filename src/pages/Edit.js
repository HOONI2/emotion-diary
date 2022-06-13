import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  /*
   * searchParams.get() 으로 받아 올 수 있다
   * QueryString 으로 넘기는 값을 받는다
   * http://localhost:8080/edit?id=1990&mode=dark
   * searchParams.get('id');
   * searchParams.get('mode')
   */
  const [searchParams, setSearchParams] = useSearchParams();

  /*
   * 링크 태그르 클릭안했을때도 의도적으로 사용자를 해당 페이지로 이동
   * navigate("/home");
   */
  const navigate = useNavigate();
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
    </div>
  );
};

export default Edit;
