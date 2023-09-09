const login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[350px] flex items-center justify-center">
        <div className="h-[90%] w-[90%] border rounded-md p-2 flex justify-start flex-col items-center border-black">
            <h1 className="text-center text-2xl mb-3">Login</h1>
            <form>
                <input type="text" placeholder="username"   className="w-[90%] p-2 text-xl border border-black m-2 rounded-sm focus:outline-none" />
                <input type="password" placeholder="password"  className="w-[90%] p-2 text-xl border border-black  m-2 rounded-sm focus:outline-none" />
                <button  className="border-2 border-black hover:bg-gray-400  rounded-l px-3 block mx-auto text-xl font-bold m-auto my-2 " type="submit">Login</button>

            </form>
        </div>
      </div>
    </div>
  );
};

export default login;
