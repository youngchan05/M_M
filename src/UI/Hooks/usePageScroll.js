import { useEffect, useRef } from 'react'

const usePageScroll = (delay = 2000) => {
    const ref = useRef()
    const activeRef = useRef(false)
    const numberRef = useRef(0)
    const onScroll = (e) => {
        const isPageDown = e?.wheelDeltaY <= 0;
        const target = ref.current;
        const children = [...target.children || []]
        const targetNumber = numberRef.current
        const changeNumber = Math.max(0, Math.min(children?.length - 1, isPageDown ? numberRef.current + 1 : numberRef.current - 1));
        if (activeRef.current || targetNumber === changeNumber) return;
        activeRef.current = true;
        setTimeout(() => { activeRef.current = false }, delay)
        children?.map((e, n) => {
            if (n === targetNumber) {
                e.style.zIndex = 0;
                e.style.transition = '';
                setTimeout(() => {
                    e.style.transform = `translateY(${-100 * changeNumber}vh)`
                }, delay)
            } else {
                e.style.zIndex = 1
                e.style.transition = `${delay}ms`
                e.style.transform = `translateY(${-100 * changeNumber}vh)`
            }
        }
        )
        numberRef.current = changeNumber
    }

    const pageSetting = () => {
        const target = ref.current;
        if (!target) return;
        target.style.height = '100vh'
        target.style.overflow = 'hidden'
    }

    useEffect(() => {
        const target = ref.current;
        pageSetting();
        target.addEventListener('wheel', onScroll, true)
        return () => {
            target.addEventListener('wheel', onScroll, true)
        }
    }, [])

    return { ref }
}

export default usePageScroll