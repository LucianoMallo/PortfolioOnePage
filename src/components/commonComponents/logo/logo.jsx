import React from 'react'
import PropTypes from 'prop-types'
import './logo.css'

function Logo ({ src, alt, width, height, href = null, text = null }) {
  const handleClick = () => {
    const newWindow = window.open(href, '_blank', 'noopener,noreferrer')
    newWindow.opener = null
  }
  return (
    href == null && text == null
      ? (
        <img src={src} alt={alt} width={width} height={height} />
        )
      : (
        <button onClick={handleClick} className='LogoLink'>
          <img src={src} alt={alt} width={width} height={height} loading='lazy' />
          <p>
            {text}
          </p>
        </button>
        )

  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  href: PropTypes.string,
  text: PropTypes.string
}

export default Logo
