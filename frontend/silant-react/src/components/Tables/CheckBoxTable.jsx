import React from "react"



export const CheckBoxTable = React.forwardRef(({row, indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])



    return(
        <>
            <input type="checkbox" checked ref={resolvedRef} {...rest} />        
        </>
    )
})