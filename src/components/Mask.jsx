import '../App.scss'

export function Mask (){
    return(
        <div className="mask px-3 w-full h-fit xl:h-[500px] 2xl:px-[312px] ">
        <div className=" relative bg-[url('../img/maskImg.jpg')]  bg-cover bg-center w-full text-center bg-no-repeat rounded-2xl text-white px-10 py-6 mt-14 z-10 h-full  overflow-hidden
        md:bg-[url('../img/MaskImg2.png')] md:py-[72px] md:px-28 " >
          <div className="absolute left-0 w-full h-full  bottom-0 z-0 bgMask"></div>
          <h1 className='relative text-3xl fontInter font-semibold z-10 md:text-4xl lg:text-7xl'>ZAK Pharmacy ваш здоровый выбор</h1>
          <p className='mt-6 relative fontInter font-normal text-2xl z-10 md:text-3xl lg:text-5xl  lg:leading-[60px]'>Найти лекарства стало очень просто</p>
          <button className='mt-9 relative fontInter font-normal bg-[var(--bg)] w-48 h-14 rounded-2xl z-10'>Начать</button>
        </div>
      </div>
    )
}