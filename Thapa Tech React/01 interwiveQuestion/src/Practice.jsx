export const Practice = () => {
    const student = []
    return(
        <>
            {student.length && "Not Student found"} {/* first condaction is false then second condaction is not check */}
            {/* {student.length === 0 && "Not Student found"} how to fix it */}
            {/* {!student.length  && "Not Student found"} how to fix it */}
            <p>Number of student : {student.length}</p>   {/* In JSX, if the first condition is falsy (like 0, false, null, undefined), it will return the falsy value itself instead of rendering nothing. */}
        </>
    )
}