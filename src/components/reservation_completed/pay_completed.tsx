import CopyButton from "../common/copy_button";

export default function PayCompleted(){
    return (
        <div className="text-[20px] items-center bg-[#F0F8FF] shadow-lg rounded-md py-4 mt-16 flex justify-center">
            <p className="me-4">계좌번호</p>
            <span className="flex text-point_color me-4">
                <p className="me-2">신한은행 110-000-00XXX 홍길동</p>
                <CopyButton copyText="신한은행 110-000-00XXX 홍길동"/>
            </span>
            <p className="text-[14px]">*입금하시면 확인 후 예약확정 안내를 보내드립니다.</p>
        </div>
    )      
}