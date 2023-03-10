import '../App.scss'
import { OftenBuyProdauct, Product } from './Product'

export function SectorTwo (props){
    return(
        <div className=" 2xl:px-[312px]">
        <h1 className=' text-center text-[32px] font-bold mt-14 xl:text-6xl'>Часто покупают</h1>
        <div className="CreatePopular mt-[30px] gap-x-3 gap-y-6 w-full grid grid-cols-2 px-3  md:grid-cols-2 lg:grid-cols-3  ">

          {
            props.arr.map(item => <OftenBuyProdauct />)
          }
        </div>
        <button className=' text-white block fontInter font-normal bg-[var(--bg)] w-48 h-14 rounded-2xl mx-auto my-[30px]'>Подробнее</button>
      </div>
    )
}