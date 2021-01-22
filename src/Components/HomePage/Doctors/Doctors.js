import React from 'react';
import Doctor from './Doctor';
import './Doctors.css'

const Doctors = () => {
    const doctorsInfo = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "img": 'https://i.ibb.co/j58sn1g/5790-removebg.png',
            "mobile": '+114-5895',
        },
        {
            "id": 2,
            "name": "Kee Karnil",
            "img": 'https://i.ibb.co/j58sn1g/5790-removebg.png',
            "mobile": '+114-8547',
        },
        {
            "id": 3,
            "name": "Bret Thor",
            "img": 'https://i.ibb.co/j58sn1g/5790-removebg.png',
            "mobile": '+114-9632',
        },
        {
            "id": 4,
            "name": "Gill hornet",
            "img": 'https://i.ibb.co/j58sn1g/5790-removebg.png',
            "mobile": '+114-7896',
        }
    ]
    return (
        <section className="doctors">
            <div className="containerr">
                <div className="doctors-header">
                    <h1>Our Doctors</h1>
                </div>
                
                <div className="row">
                    {
                        doctorsInfo.filter(x => x.id < 4).map(doct => <Doctor doct={doct} key={doct.id}></Doctor>)
                    }
                </div>
            </div>



            {/* <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck> */}
        </section>
    );
};

export default Doctors;