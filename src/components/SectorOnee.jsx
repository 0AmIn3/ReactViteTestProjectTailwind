// let arr = [0, 0, 0, 0, 0, 0, 0, 0]
import '../App.scss'
import { Product } from './Product'
export function SectorOnee (props){
    return(
        <div className="">
        <h1 className=' text-center text-[32px] font-bold mt-14 xl:text-6xl'>Популярные товары</h1>
        <div className="CreatePopular mt-[30px] overflow-x-auto gap-x-3 xl:gap-x-6 w-full flex px-3 py-[50px] bg-[rgba(126,126,126,0.1)] ">

          {
            props.arr.map(item => <Product item={item} />)
          }
        </div>
        <button className=' text-white block fontInter font-normal bg-[var(--bg)] w-48 h-14 rounded-2xl mx-auto my-[30px]'>Подробнее</button>
      </div>
    )
}