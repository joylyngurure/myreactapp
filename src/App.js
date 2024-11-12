
import './App.css';

function App() {
  return (
    <div class='flex justify-center items-center h-screen bg-gray-200'>
      <div class='w-343 p-6 h-100 shadow-lg h- 957 bg-white rounded-2xl'>
 
      <div className="flex  justify-start mb-4">
          <img src={require('./images/mylogo.png')} alt=''/>
        </div>
        <h1 class='font-bold text-2xl'> Welcome to Growthsensetech Services</h1>  
         <p>We champion the brave to achieve extraordinary</p> 
         <div> <label for='email' class='font-bold text-large mb-2'>Email</label>
          <input type='text' id='username' class='rounded-xl border w-full text-base px-4  py-3 focus:outline-none focus:ring-a ' placeholder='enter email' ></input>
      </div>   
          <div> <label for='password mt-2' class='font-bold text-large '>Password</label>
             <input type='text' id='pasword' class=' rounded-xl border w-full text-base px-4 py-3 focus:outline-none focus:ring-a ' placeholder='enter password'></input>
          </div> 

          <button className="w-full bg-blue-500 text-white py-3 mt-3 rounded-xl hover:bg-blue-600 transition duration-200">Sign in</button>
             <div className="my-4 border-center-2 text-center text-gray-500" ><span className="inline-line">or continue with</span></div>
             <div className='flex flex-col items-start  justify-center'>
             <div className="flex space-x-20 justify-center">
          <button className="bg-gray-100 p-2 rounded-2xl shadow-l" style={{width:'150px'}}>
          <div className="flex  justify-start logo-small">
          <img src={require('./images/1.png')} style={{width:'40px'}} alt=''/>
        </div>
          </button>
          <button className="bg-gray-100 p-2 rounded-2xl  " style={{width:'150px'}}  >
            <div classname='flex justify-center '> <img src={require('./images/2.png')} style={{width:'40px'}} alt=''/></div>
          </button>
          <button className="bg-gray-200 p-2 rounded-2xl " style={{width:'150px'}}>
          <div classname='img-center inline-flex items-center  bg-gray'> <img src={require('./images/4.png')} style={{width:'40px'}} alt='' className='bg-red-800' /></div>
          </button>
        </div>
              <div className='flex justify start  text-blue-400'> <button className='bg-white'>Forgot Password?</button></div>
               <div><p>Don't Have an account?  <button className='bg-white text-blue-400'>SignUp</button></p></div>

             </div> 
            
      </div>
       

      

        
           
      
     
    </div>
  );
}

export default App;