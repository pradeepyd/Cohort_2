// import axios from "axios";

// async function getUserdata() {
//   const response = await axios.get("http://localhost:3000/api/user")
//   return response.data
// }
export default  function Home() {
  // const userDetails = await getUserdata()
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
         <div className="border p-8 rounded">
           <div>
                hello there
           </div>
                from root
         </div>
      </div>
    </div>
  );
}


