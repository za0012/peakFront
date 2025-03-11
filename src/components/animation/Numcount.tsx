"use client";

import React, { useEffect, useState } from "react";
import "./a.css";

const Numcount = () => {
  /** count up 함수 */
  const useCountUp = (num: number, duration: number) => {
    const [count, setCount] = useState(0);
    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);

    // useEffect로 mount되는 순간 한 번 실행
    useEffect(() => {
      let currentNumber = 0;

      // setInterval로 setCount
      const counter = setInterval(() => {
        const progressRate = ++currentNumber / totalFrame;
        setCount(Math.round(num * progressRate));

        // 진행 완료시 interval 해제
        if (progressRate === 1) {
          clearInterval(counter);
        }
      }, frameRate);
    }, []);

    // setInterval함수에서 세팅한 count return
    return count;
  };

  return (
    <>
      <div>왜왜왜왜왜!!!!!</div>
    </>
  );
};

export default Numcount;
