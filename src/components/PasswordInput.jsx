// Code PasswordInput Component Here

function PasswordInput() {
    function handleChange(event) {
        console.log("Entering password…");
    }
    return (
        <>
            <input type="password" placeholder="Enter your password" onChange={handleChange} name="password" />
        </>
    )
}

export default PasswordInput;