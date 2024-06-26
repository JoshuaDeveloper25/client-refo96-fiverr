import FormProduct from "../pages/FormEmail/FormProduct";
import { Accordion, Col } from "react-bootstrap";

const IndividualAccordion = ({
  categoryProducts,
  categoryProduct,
  categoryTitle,
  categoryEventKey,
  productsAvailable,
  handleChange,
}) => {
  return (
    <Col sm={6} className="mb-3">
      <Accordion.Item eventKey={categoryEventKey}>
        <Accordion.Header>{categoryTitle}</Accordion.Header>
        <Accordion.Body>
          {categoryProducts?.map((categoryProduct, idx) => {
            return (
              <FormProduct
                categoryTitle={categoryTitle}
                handleChange={handleChange}
                productsAvailable={productsAvailable}
                productName={categoryProduct?.productName}
                key={idx}
              />
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Col>
  );
};

export default IndividualAccordion;
