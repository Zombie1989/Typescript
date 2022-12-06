import { useEffect } from 'react'
import MainMenu from '../sections/MainMenu'
import TopBanner from '../sections/TopBanner'
import ProductGrid from '../sections/ProductGrid'
import SaleOne from '../sections/SaleOne'
import SaleTwo from '../sections/SaleTwo'
import WebpageInfo from '../sections/WebPageInfo'
import Footer from '../sections/Footer'
import TopPicks from '../sections/TopPicks'
import { ProductContextType, useProductContext } from '../contexts/ProductContext-2'


const HomeView: React.FC = () => {
  const {featuredProduct, getFeatured} = useProductContext() as ProductContextType
  const {saleOne, getSaleOne} = useProductContext() as ProductContextType
  const {saleTwo, getSaleTwo} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
    getSaleOne(4)
    getSaleTwo(4)
  }, [])



  window.top!.document.title = 'Fixxo.'

  return (
    <>
      <MainMenu />
      <TopBanner title="Sale Up To 50% OFF" text="Online shopping free home delivery over $100" />
      <ProductGrid title="Featured Products" items={featuredProduct} />
      <TopPicks />
      <SaleOne title="2 FOR USD $29" items={saleOne} />
      <SaleTwo title="2 FOR USD $49" items={saleTwo} />
      <WebpageInfo />
      <Footer />
    </>
  )
}

export default HomeView