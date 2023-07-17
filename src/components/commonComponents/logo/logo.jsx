import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ src, alt, width, height, href = null, text = null }) => {
  if (href == null && text == null) {
    return (

      <img src={src} alt={alt} width={width} height={height} />

    )
  } else {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className='LogoLink'>
        <img src={src} alt={alt} width={width} height={height} loading='lazy' />
        <p>
          {text}
        </p>
      </a>
    )
  }
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
