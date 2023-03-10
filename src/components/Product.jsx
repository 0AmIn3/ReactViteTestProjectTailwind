import '../App.scss'
export function Product(props){
    return(
      <div className="flex justify-between flex-col min-w-[196px] bg-white rounded-2xl p-4  xl:min-w-[306px] xl:h-[400px]">
      <div className="text-[#7E7E7E] fontInter font-normal xl:text-xl">
        <img className="w-full" src="../img/ProductImg.png" alt="" />
        <p>Клексан шприц 4000 анти-Ха МЕ/0.4мл №10</p>
        {/* {props.item} */}
      </div>
      <p className='mt-7 text-[var(--bg)] font-semibold fontInter text-base xl:text-2xl'>160 000 сум</p>
    </div>
    )
  }
  export function OftenBuyProdauct(props){
    return(
      <div className="flex justify-between flex-col w-[196px] md:w-[251px]  xl:w-[306px] xl:h-[400px]  mx-auto shadowBox bg-white rounded-2xl p-4">
      <div className="text-[#7E7E7E] fontInter font-normal xl:text-xl">
        <img className="w-full" src="../img/ProductImg.png" alt="" />
        <p>Клексан шприц 4000 анти-Ха МЕ/0.4мл №10</p>
        {/* {props.item} */}
      </div>
      <p className='mt-7 text-[var(--bg)] font-semibold fontInter text-base xl:text-2xl'>160 000 сум</p>

    </div>
    )
  }