import '../App.scss'

export function Footer (){
    return(
        <footer className='w-full  bg-[var(--bg)] px-3 py-6 mt-14 xl:flex 2xl:px-[312px] max-w-[1920px] my-0 mx-auto'>
        <div className=" w-full  mx-auto my-0  xl:w-[196px]">
          <img className='w-[196px] mXY' src="../img/logo2.svg" alt="" />
          <p className='text-xl text-white leading-8 font-normal fontInter lg:text-sm'>Серви поддерживает вас и помогает найти лекарства по выгодным ценам и с удобной круглосуточной доставкой почти в любую точку страны. Будьте здоровы с нами!</p>
        </div>

        <div className="flex text-white  py-6  justify-between w-full gap-[66px] xl:w-[615px] ">
          <div className="flex flex-col   gap-6">
            <h1 className='text-2xl  font-bold leading-8'>О компании</h1>
            <div className="text-base fontInter leading-9 font-medium">
              <a href="#"><p>Контакты</p></a>
              <a href="#"><p>Доставка</p></a>
              <a href="#" className='leading-5'><p>Пользовательское соглашение</p></a>
              <a href="#"><p>Стать партнёром</p></a>
              <a href="#"><p>Стать курьером</p></a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className='text-2xl  font-bold leading-8'>Помощь</h1>
            <div className="text-base fontInter leading-9 font-medium">
              <a href="#"><p>Часто задаваемые вопросы</p></a>
              <a href="#"><p>Как заказать</p></a>
              <a href="#"><p>Обратная связь</p></a>
              <a href="#" className='leading-5'><p>Правила для оформления отзывов и комментариев</p></a>
              <a href="#"><p>Стать курьером</p></a>
            </div>
          </div>
        </div>

        <div className="mXY   text-white flex flex-col  justify-end">
          <h1 className='fontInter text-base font-medium leading-5'>Мы в социальных сетях</h1>
          <div className="flex justify-between mt-4">
            <img src="../img/Facebook.png" alt="" />
            <img src="../img/Instagram.png" alt="" />
            <img src="../img/Telegram.png" alt="" />
          </div>
          <p className='mt-8 fontInter text-lg font-semibold leading-7'>+998 71 200-00-00</p>
        </div>
      </footer>
    )
}