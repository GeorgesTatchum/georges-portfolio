import { useMediaQuery } from "react-responsive"

const useMediaQueryHook = () => {
    const xl_b = useMediaQuery({ query: '(min-width: 1536px)' })
    const xl = useMediaQuery({ query: '(min-width: 1280px)' })
    const lg = useMediaQuery({ query: '(min-width: 1024px)' })
    const lgd = useMediaQuery({ query: '(max-width: 1023px)' })
    const md = useMediaQuery({ query: '(max-width: 768px)' })
    const sm = useMediaQuery({ query: '(max-width: 640px)' })

    return { xl_b, xl, lg, lgd, md, sm };
}

export default useMediaQueryHook;