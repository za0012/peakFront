'use client';

import React, { useEffect, useState } from 'react';

import { Manrope, Sora } from 'next/font/google';
import Logos from './Logos';
import Card from './Card';

const sora = Sora({
    variable: '--font-sora',
    subsets: ['latin', 'latin-ext'],
});

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'latin-ext'],
});

/** 진행률에 따라 count 속도 조절 */
const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};
/** 점차 느려지는 count up 함수 */
const useCountUp = (num: number, duration: number) => {
    const [count, setCount] = useState(0);
    const frameRate = 1000 / 60;
    const totalFrame = Math.round(duration / frameRate);

    useEffect(() => {
        let currentNumber = 0;
        const counter = setInterval(() => {
            const progressRate = easeOutExpo(++currentNumber / totalFrame);
            setCount(Math.round(num * progressRate));

            // 진행 완료시 interval 해제
            if (progressRate === 1) {
                clearInterval(counter);
            }
        }, frameRate);
    }, []);

    return count;
};
//수정수정수정

const DataContent = () => {
    const count = useCountUp(8979, 3000); // 예시로 8979을 5초 동안 카운트업

    return (
        <div className="w-full xl:w-desktop-width mx-auto">
            <div className="w-full px-[20px] py-[30px] md:px-0 md:py-[100px]">
                <div className="w-full flex justify-between flex-col md:items-center md:flex-row">
                    <p>
                        <span className="font-semibold text-[35px] md:text-[70px]">
                            B2B Data
                        </span>{' '}
                        <br />
                        <span className="text-[35px] md:text-[70px]">
                            integration for
                        </span>{' '}
                        <br />
                        <span className="font-bold text-primary text-[40px] md:text-[80px] leading-[130%]">
                            330K
                        </span>
                    </p>
                    <div className="flex flex-col justify-between bg-black text-white w-full h-[120] p-[14px] mt-[10px] rounded-[12px] md:w-[420px] md:h-[335px] md:p-[51px] md:mt-0 md:rounded-[25px] ">
                        <div className="flex items-baseline">
                            <p
                                className={`${sora.className} font-semibold text-[35px] md:text-[80px]`}
                            >
                                {count.toLocaleString()}
                            </p>
                            <span className="font-semibold text-[20px] md:text-[40px] ml-2">
                                명
                            </span>
                        </div>
                        <p
                            className={`${manrope.className} font-semibold text-[14px] md:text-[20px]`}
                        >
                            CEO Level
                        </p>
                    </div>
                </div>
                <Logos />
                <div className="grid grid-rows-[repeat(3,_1fr)] gap-5 mt-[20px] md:mt-[113px] md:grid-cols-[repeat(3,_1fr)] md:grid-rows-1  lg:min-h-[365px]">
                    {['Search', 'Meeting', 'Deal'].map((title) => (
                        <Card title={title} key={title} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DataContent;
