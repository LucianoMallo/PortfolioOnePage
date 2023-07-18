import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './projectCard.css'

function ProjectCard ({ Title, Text, Link, TextLink, Image }) {
  const handleOpenNewWindow = () => {
    window.open(Link, '_blank')
  }
  return (
    <div className='card-container'>
      <Card>
        <Card.Body style={{ padding: '20px' }}>
          <Card.Title>{Title}</Card.Title>
          <div style={{ position: 'relative', paddingTop: '90%' }}>
            <Card.Img
              variant='top'
              src={Image}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'scale-down' }}
            />
          </div>
          <Card.Text>
            {Text}
          </Card.Text>
          <Button variant='primary' onClick={handleOpenNewWindow}>Take me there</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCard
