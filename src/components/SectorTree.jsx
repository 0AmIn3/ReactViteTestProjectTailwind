import '../App.scss'
export function SectorTree(){
    return(
        <div className=" 2xl:px-[312px]">
        <h1 className=' text-center text-[32px] font-bold mt-14 xl:text-6xl'>О нас</h1>

        <div className="lg:flex gap-24 mt-8">
          <div className=" relative  w-[340px] md:my-8 md:mx-auto  lg:mt-0 mt-8 px-3">
            <div className=" w-[340px] h-[340px] bg-[#00504D] rounded-[30px]"></div>
            <div className=" absolute w-[354px]  h-[354px] top-[50px] left-[62px] bg-[url('../img/AboutUs.jpg')] overflow-hidden rounded-[30px] bg-no-repeat bg-cover bg-center" ></div>
          </div>

          <div className="mt-24 lg:mt-0 px-3 md:px-12">
            <h1 className='text-2xl font-normal leading-6 xl:text-3xl'>Наши товары делают жизнь комфортной и безопасной. Высокий уровень сервиса и понимания к каждому покупателю.</h1>
            <ul className='mt-6'>
              <li >
                <p className=' text-base font-normal xl:text-3xl'>01. Большой ассортимент</p>
                <span className='font-normal  text-sm text-[#7E7E7E] fontInter  xl:text-xl'>Для ванной комнаты с различным покрытием</span>
              </li>
              <li className='mt-4'>
                <p className=' text-base font-normal xl:text-3xl'>02. Доступные цены</p>
                <span className='font-normal  text-sm text-[#7E7E7E] fontInter  xl:text-xl'>Сантехника под любой запрос</span>
              </li>
              <li className='mt-4'>
                <p className=' text-base font-normal xl:text-3xl'>03. Высокий уровень сервиса</p>
                <span className='font-normal  text-sm text-[#7E7E7E] fontInter  xl:text-xl'>Решаем неудовлетворенные потребности покупателей, ценим клиентов как деловых партнеров</span>
              </li>
              <li className='mt-4'>
                <p className=' text-base font-normal xl:text-3xl'>04. Круглосуточная доставка</p>
                <span className='font-normal  text-sm text-[#7E7E7E] fontInter  xl:text-xl'>Предоставляем круглосуточную доставку по всему Узбекистану </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-3 w-[404px] lg:w-full md:my-8 mx-auto ">
          <div className="w-[404px] h-[438px] bg-[#00504D] rounded-[30px] mt-[50px] lg:flex lg:w-full lg:items-center">
            <h1 className='fontInter text-2xl text-white text-center font-bold leading-8 px-8 py-6  xl:text-4xl'>Пользуйтесь нашим приложением для большего удобства</h1>
            <img className='w-[526px] lg:h-full' src="../public/img/img!.png" alt="" />
          </div>
        </div>
      </div>
    )
}