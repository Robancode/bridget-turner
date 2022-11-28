import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import feet from "../assets/feet4.jpg";

function InGrowingToenails() {
  return (
    <Container className='py-12 d-flex flex-row'>
      <Col className='d-flex flex-col pr-4' lg={9} md={12} sm={12}>
        <h2 className='py-12'>In-growing toenails</h2>

        <p>
          Persistent or severe in-growing toenails are often the cause of pain,
          irritation and infection of the toe.
        </p>

        <p>
          If the problem is not solved by conservative (non-surgical) treatment,
          then a small operation to remove a part or sometimes all, of the
          offending nail may be recommended by your podiatrist.
        </p>

        <h3>Treatment</h3>
        <p>
          Treating the nail by surgical removal is a minor operation, which can
          be treated in the clinic by the podiatrist and an assistant. If you
          are generally healthy and are able to look after your feet then this
          treatment option can offer a fast and permanent cure.
        </p>

        <h4>PNA (partial nail avulsion) with or without phenolization</h4>

        <p>
          Partial nail avulsion is the usual choice of surgical treatment for
          in-growing nails. This is when a small section of the nail is removed
          under local anaesthetic, leaving the most part of the nail intact.
          Sometimes, the area is treated with phenol after the nail has been
          taken away, to stop that part of the nail from growing back. Phenol
          chemically burns, and therefore means the toe will take a little
          longer to heal. Complete healing takes on average between 8 to 10
          weeks with phenolization, compared to about 6 weeks without. Please
          note that everyone is different, and these are only averages.
        </p>

        <h4>What do I Need to do Before Surgery?</h4>

        <p>
          Make sure that you don’t have local anaesthetic (from the dentist for
          example) for 24 hours before the operation.
        </p>
        <p>
          If your doctor has prescribed antibiotics then these should be
          collected and started straight away.
        </p>

        <p>
          You will need to bring a suitable open-toed shoe for wearing
          afterwards.
        </p>

        <p>
          Please bring information regarding medication and medical conditions
          with you.
        </p>

        <p>Bring a friend or relative with you.</p>

        <p>
          Arrange transport to take you home after the operation, as you
          shouldn’t drive for 24 hours.
        </p>

        <h4>How Long Does the Surgery Take?</h4>

        <p>
          The operation itself only takes about 20 minutes, but time for
          preparing the patient, giving local anaesthetic and dressing the toe
          afterwards means that it should take about an hour to complete.
        </p>

        <h4>Dressing and Caring for the Toe</h4>

        <p>
          After the operation, the leg should be elevated and rested for at
          least a few hours. In a few days you will be asked back to the clinic
          for the first redressing, and a smaller, more compact dressing will be
          applied. This means that you should be able to fit into your normal
          footwear, and carry on with normal activities, although it is not
          advisable to play sports until healing is complete.
        </p>
        <p>
          Follow up appointments will be necessary until the podiatrist is
          satisfied that it is healed, but you will be expected to look after
          and redress the toe at home between appointments. The podiatrist will
          provide dressings and advise you on this.
        </p>

        <h4>What will the nail look like when it has healed up?</h4>

        <p>
          For a PNA, the side of the nail will heal up without scarring and the
          nail should look perfectly normal. A small percentage of patients
          experience re-growth, which means that some of the nail grows back,
          but if it does, it isn’t usually a problem.
        </p>

        <h4>Complications</h4>

        <p>
          Problems linked to nail surgery include pain, bleeding and infection.
          Allergic reaction to anaesthetic is also a risk. All these
          complications are considered very carefully by the podiatrist, and
          measures are taken throughout to keep these problems from arising.
        </p>

        <p>
          If you have any questions at all, or would like more information, then
          please ask, I will be happy to help you
        </p>
      </Col>
      <Col lg={3} sm={12} md={12}>
        <img src={feet} className='rounded-sm' />
      </Col>
    </Container>
  );
}

export default InGrowingToenails;
