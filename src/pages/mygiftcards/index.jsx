import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./my-gift-card.css";
import { myGiftCardsData } from "../../utils/constants/constants";
import ButtonTab from "../../components/ButtonTab";
import FilterSelect from "../../components/FilterSelect";

// Assuming myGiftCardsData, ButtonTab, and FilterSelect are correctly imported

const MyGiftCard = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const cardStyle = {
    borderRadius: "20px", // Adjust the border-radius as needed
    border: "1px solid #000",
  };
  const circularImageStyle = {
    width: "50px", // Adjust the width as needed
    height: "50px", // Adjust the height as needed
    borderRadius: "50%", // This makes the image circular
    objectFit: "contain", // Ensures the image covers the area without stretching
    marginRight: "15px", // Adds some spacing between the image and the title
    border:'1px solid #000'
  };

  const toggleAccordion = (id) => {
    if (activeCardId === id) {
      setActiveCardId(null); // Close the accordion item if it's already open
    } else {
      setActiveCardId(id); // Open the clicked accordion item
    }
  };

  const jsonDataArray = [
    {
      id: 1,
      cardTitle: "Myntra eGift Card",
      quantity: "₹200",
      price: "₹200",
      availableBalance: "1000.00",
      expiryDate: "14 April 2024",
    },
    {
      id: 2,
      cardTitle: "Another Card",
      price: "₹200",
      quantity: "₹100",
      availableBalance: "500.00",
      expiryDate: "31 December 2023",
    },
    {
      id: 3,
      cardTitle: "Arbaaz",
      price: "₹200",
      quantity: "₹400",
      availableBalance: "-500.00",
      expiryDate: "31 September 2023",
    },
    // Add more data sets as needed
  ];

  return (
    <div>
      <div className="myGiftCardHeader">
        <div className="headerText">
          <img src="/Images/left-arrow.svg" alt="left-arrow" />
          <div className="headerTextTitle">My Gift Cards</div>
        </div>
        <div className="headerDropdown">
          <FilterSelect />
        </div>
      </div>

      <div className="buttonTab">
        <ButtonTab
          data={myGiftCardsData}
          defaultSelected={myGiftCardsData[0]?.id}
        />
      </div>

      <Accordion open={activeCardId} toggle={(id) => toggleAccordion(id)}>
        {jsonDataArray.map(
          ({
            id,
            cardTitle,
            quantity,
            availableBalance,
            expiryDate,
            price,
          }) => (
            <AccordionItem key={id} className="m-3">
              <AccordionHeader targetId={`${id}`}>
                <Container>

                <Row className="align-items-center">
                  <Col xs='2' className="px-0"><img
                  src="Images\myntra.png"
                  alt="Profile"
                  style={circularImageStyle}
                  /></Col>
                  <Col xs='8' >{cardTitle}</Col>
                  <Col xs='2' className="flex-end"> {price}</Col>
                </Row>
                  </Container>
                
                
               
              </AccordionHeader>
              <AccordionBody accordionId={`${id}`}>
                <Card style={cardStyle} className="">
                  <CardBody>
                    <CardTitle tag="h5" className="border">Card Title</CardTitle>
                    <CardText>
                      This is some text within a card body. This card has
                      rounded corners.
                    </CardText>
                    {/* Add more card content here */}
                  </CardBody>
                </Card>
              </AccordionBody>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
};

export default MyGiftCard;
