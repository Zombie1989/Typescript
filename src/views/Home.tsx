import {useContext} from 'react'
import MainMenu from '../sections/MainMenu'
import TopBanner from '../sections/TopBanner'
import ProductGrid from '../sections/ProductGrid'
import Saletwenty from '../sections/SaleOne'
import Saleforty from '../sections/SaleTwo'
import WebpageInfo from '../sections/WebPageInfo'
import Footer from '../sections/Footer'
import { FeaturedProductsContext, OnSaleProductsContext } from '../contexts/contexts'
import TopPicks from '../sections/TopPicks'


const HomeView = () => {
  const products = useContext(FeaturedProductsContext)
  const products2 = useContext(OnSaleProductsContext)

  window.top!.document.title = 'Fixxo.'

  return (
    <>
      <MainMenu />
      <TopBanner title="Sale Up To 50% OFF" text="Online shopping free home delivery over $100" />
      <ProductGrid title="Featured Products" items={products} />
      <TopPicks />
      <Saletwenty title="2 FOR USD $29" items={products2} />
      <Saleforty title="2 FOR USD $49" items={products2} />
      <WebpageInfo />
      <Footer />
    </>
  )
}

export default HomeView