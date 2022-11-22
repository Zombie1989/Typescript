const ExternalLinkIcon = ({link, icon}:any) => {
  return (
    <a href={link} target="_gblank">
      <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon