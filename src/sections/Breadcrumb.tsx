import { NavLink } from 'react-router-dom'

const BreadcrumbSection = ({currentPage}:any) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <NavLink to="/" className="fa-sharp fa-solid fa-house"></NavLink>
          </li>
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  )
}

export default BreadcrumbSection