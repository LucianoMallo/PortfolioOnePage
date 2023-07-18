import Card from 'react-bootstrap/Card'
import './Card.css'

function SectionCard ({ Title, Subtitle, Text, Link, TextLink }) {
  const handleClickScroll = () => {
    const element = document.getElementById(Title)
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <button className='Card-Container' onClick={handleClickScroll}>
      <Card className='Custom-Card' style={{ width: '18rem', borderRadius: '30px' }}>
        <Card.Body>
          <Card.Title style={{ paddingBottom: '20px' }}>{Title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{Subtitle}</Card.Subtitle>
          <Card.Text>{Text}
          </Card.Text>
          <Card.Text>{TextLink}
          </Card.Text>
        </Card.Body>
      </Card>
    </button>
  )
}

export default SectionCard
