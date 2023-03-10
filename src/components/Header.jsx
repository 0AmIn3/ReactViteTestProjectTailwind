import '../App.scss'
export function Header (){
    return(
        <header className='flex flex-col items-center px-3  lg:flex-row gap-6 lg:items-center pt-6 lg:justify-between max-w-[1920px] my-0 mx-auto'>
        <div className=" w-[132px] lg:w-[196px] ">
          <img src="../img/logo-zak.svg" width='100%' alt="" />
        </div>  
        <form action="" className='w-full h-14 bg-[var(--bg)] mt-7 px-4 py-5 flex justify-between items-center  rounded-2xl lg:mt-0'>
        

            <input className="placeholder:text-white block   text-white  bg-transparent   w-[80%] h-full  fontInter text-xs   shadow-sm focus:outline-none  sm:text-sm" placeholder="Введите название товара или заболевания" type="text" name="search" />

            <span className=" items-center pl-2 flex">
              <img src="../img/search.svg" alt="" />
            </span>
          
        </form>

        <div className="langReg fontInter flex justify-between  w-full mt-6 lg:justify-center gap-6 items-center lg:mt-0 lg:w-fit" >
          <select name="lang" id="" className=' w-20 h-14 bg-[var(--bg)] text-white rounded-2xl '>
            <option value=""></option>
            <option value=""></option>

            <option value=""></option>

          </select>
          <button className=' w-48 h-14 bg-[var(--bg)] text-white rounded-2xl'>Войти/Регистрация</button>
        </div>
      </header>
    )
}