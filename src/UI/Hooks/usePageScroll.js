import { useEffect, useRef } from 'react'

const usePageScroll = (
    delay = 1000//모션 속도
) => {
    const ref = useRef() //풀페이지 target 풀페이지를 잡아줄 dom에 ref를 넣으면 됩니다
    const activeRef = useRef(false) //액션 진행 여부
    const numberRef = useRef(0)// 현재 페이지

    const childrenScrollCheck = (target, before, after) => {
        const windowHeight = window.innerHeight;
        const targetHeight = target.scrollHeight;
        const targetTo = target.scrollTop;
        if (windowHeight === targetHeight) return false
        if (before < after && targetTo + windowHeight !== targetHeight) return true
        if (before > after && targetTo !== 0) return true;
        return false

    }

    const onScroll = (e) => {
        if ((e?.wheelDeltaY > -5 && e?.wheelDeltaY < 5) || activeRef.current) return;//액션 진행중이거나 작은 스크롤시 정지
        const isPageDown = e?.wheelDeltaY <= 0; // 스크롤 방향
        const target = ref.current;
        const children = [...target.children || []] // 풀페이지 target children
        const targetNumber = numberRef.current //현재 페이지Number
        const changeNumber = Math.max(0, Math.min(children?.length - 1, isPageDown ? numberRef.current + 1 : numberRef.current - 1)); //이동되는 페이지 Number
        const controllCheck = childrenScrollCheck(children[numberRef.current], targetNumber, changeNumber)
        if (targetNumber === changeNumber || controllCheck) return; // 현재페이지와 이동되는 페이지가 같을 경우 정지
        activeRef.current = true;// 액션 시작
        setTimeout(() => { activeRef.current = false }, delay) //모션 후 액션 종료
        children?.map((e, n) => {
            if (n === targetNumber) { // 현재 페이지 고정
                e.style.zIndex = 0;
                e.style.transition = '';
                setTimeout(() => {
                    e.style.transform = `translateY(${-100 * changeNumber}vh)`
                }, delay)
            } else {// 현재 페이지 외 나머지 페이지 액션
                e.style.zIndex = 1
                e.style.transition = `transform ${delay}ms, z-index 0s`
                e.style.transform = `translateY(${-100 * changeNumber}vh)`
            }
        }
        )
        numberRef.current = changeNumber //페이지 number 수정
    }

    useEffect(() => {
        const target = ref.current;
        target.addEventListener('wheel', onScroll, true)
        target.style.height = '100vh'
        target.style.overflow = 'hidden'
        return () => {
            target.addEventListener('wheel', onScroll, true)
            target.style.height = ''
            target.style.overflow = ''
        }
    }, [])

    return { ref }
}

export default usePageScroll