import React from 'react'
import { NavLink } from 'react-router-dom'

interface BreadcrumbType {
  currentPage: string
  parentPage?: string
}

const Breadcrumb: React.FC<BreadcrumbType> = ({currentPage, parentPage}) => {
  return (
    <section className="breadcrumb">
      <div className="container">
        <ul className="breadcrumb-list">
          <li>
            <NavLink to="/" className="fa-sharp fa-solid fa-house"></NavLink>
          </li>
          {
            (parentPage != undefined) ? <li><NavLink to={`${parentPage}`}></NavLink></li> : ""
          }
          <li>{currentPage}</li>
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb