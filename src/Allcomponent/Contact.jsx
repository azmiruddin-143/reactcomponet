

 const Contact = () => {
    return(
        <div className="flex flex-col justify-center items-center my-5 gap-6"> 
            <h1 className="text-3xl font-bold text-black">Contact Us</h1>
            <input type="Email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
            <button onClick={()=> alert("Successful")} className="btn text-white bg-black">Submit</button>
        </div>
    )
 }

 export default Contact