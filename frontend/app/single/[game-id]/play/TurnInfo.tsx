'use client'
// 턴 정보, 매수 + 매도 버튼 컴포넌트
import { useState } from 'react';
import TurnNow from './TurnNow';
import BuySellModal from './BuySellModal';
import SingleGameEndModal from './SingleGameEndModal';

export default function TurnInfo () {
    // 현재 턴
    const [turn, setTurn ] = useState(1);
    // const [turn, setTurn] = useState<number>(0);
    // 매수 / 매도 모달창 open 여부
    const [isOpenSaleModal, setIsOpenSaleModal] = useState<boolean>(false);
    // 매수 or 매도(true시 매수)
    const [isBuy, setIsBuy] = useState<boolean>(true);

    // 싱글 게임 종료 모달창 open 여부
    const [isOpenEndModal, setIsOpenEndModal] = useState<boolean>(false);

    const handleClickTurn = function () {
        if (turn == 50) {
            setIsOpenEndModal(true);
            setTurn(1);
        } else {
            setTurn(turn+1)
            console.log(turn);

        }
    }
    return (
        <div className="row-start-1 row-end-2 grid grid-rows-2">
            <div className="row-span-1">
                <div className="m-1 text-textColor-1 text-center">현재 턴 : {turn} / 50</div>
                <TurnNow turn={turn} />
            </div>
            <div className="row-span-1 grid grid-cols-3 items-center justify-center">
                <button 
                    onClick={() => {
                        setIsBuy(true);
                        setIsOpenSaleModal(true);
                    }} 
                    className="col-span-1 rounded-md scale-95 text-small-3 bg-textColor-2 border border-small-3 m-2 hover:text-textColor-2 hover:bg-small-3 hover:scale-105 shadow-md shadow-small-3 ease-in-out duration-500"
                >
                    매수    
                </button>
                <button 
                    onClick={() => {
                        setIsBuy(false);
                        setIsOpenSaleModal(true);
                    }} 
                    className="col-span-1 rounded-md scale-95 text-small-1 bg-textColor-2 border border-small-1 m-2 hover:text-textColor-2 hover:bg-small-1 hover:scale-105 shadow-md shadow-small-1 ease-in-out duration-500"
                >
                    매도   
                </button>
                <button 
                    onClick={() => {handleClickTurn()}} 
                    className="col-span-1 rounded-md scale-95 text-textColor-1 bg-textColor-2 border border-textColor-1 m-2 hover:text-textColor-2 hover:bg-textColor-1 hover:scale-105 shadow-md shadow-textColor-1"
                >
                    다음
                </button>
            
            </div>
            <BuySellModal isBuy={isBuy} isOpen={isOpenSaleModal} onClose={() =>setIsOpenSaleModal(false) }/>
            <SingleGameEndModal isOpen={isOpenEndModal} onClose={() => setIsOpenEndModal(false)}/>
        </div>
    )
}