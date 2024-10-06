import Image from "next/image";
import netflix from "./public/netflix_logo.png";


export default function Home() {
  return (
    <>
      
      <div class="bg-black text-white h-screen"> 
        <div class="flex justify-between gap-3 p-3">
          <Image
            src={netflix}
            alt="Netflix Logo"
            width={140}
            height={40}
          ></Image>
          <button class="bg-red-600 mt-2 mr-2 w-[72px] h-[30px] rounded-md text-sm text-white ">로그인</button>
        </div>
        <div class="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-4xl font-semibold">영화, 시리즈 등을 <br></br>무제한으로</h1>
            <p class="text-base mt-3">5,500원으로 시작하세요. 맴버십은 언제든 해지 가능.</p>
            <p class="text-base mt-5">시청할 준비가 되셨나요? 맴버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요</p>
            <input 
              type="email" 
              placeholder="이메일 주소"
              class="p-2 me-2 mt-3 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 outline outline-1 outline-gray-300"></input>
            <button class="text-base text-xl bg-red-600 px-6 py-2 rounded-md text-white">시작하기  &gt;</button>
        </div>
      </div>
  </>
  );
}