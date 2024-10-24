import { useEffect,useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../_state/atom";

export function useToken() {
    const [token, setToken] = useRecoilState(tokenState);

    useEffect(() => {
      const savedToken = localStorage.getItem('token');
      const expiresAt = localStorage.getItem('expiresAt') ? parseInt(localStorage.getItem('expiresAt'), 10) : 0;
      const now = new Date().getTime();

      if (savedToken && now < expiresAt) {
        setToken(savedToken);
      }else{
         // 만료된 경우 초기화
         localStorage.removeItem('token');
         localStorage.removeItem('expiresAt');
         setToken(null); // Recoil 상태도 초기화
      }
    }, []);
  
    // 토큰 저장 함수
    const saveToken = (newToken:string) => {
      const now = new Date().getTime();
      const expiresAt = now + 1000 * 60 * 60 * 9 + 1000 * 60 * 30; // 9시간 30분 후 만료 처리 (서버에서 반환하는 토큰 유효 시간:10시간)
  
      localStorage.setItem('token', newToken);
      localStorage.setItem('expiresAt', expiresAt.toString());
      setToken(newToken); // recoil 저장
    };
  
    return { token, saveToken};
  }