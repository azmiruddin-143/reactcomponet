
const Header = () => {
    return(
        <div className="flex justify-between px-14 mt-3">
            <h1 className="font-bold text-2xl text-black">Azmir Uddin</h1>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs text-lg" />
             <button onClick={() => alert("Login In")} className="btn text-white bg-black">Sign Up</button>
        </div>
    )
}

export default Header;