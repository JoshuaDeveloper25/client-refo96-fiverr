import {
  alfajores,
  budines,
  comidas,
  confituras,
  galletas,
  panificados,
  pastafrolas,
  porciones,
  tartaDulces,
  tartaDulcesChicas,
} from "../../utils/Products";
import IndividualAccordion from "../../components/IndividualAccordion";
import { Accordion, FloatingLabel, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const FormEmail = () => {
  const [productsAvailable, setProductsAvailable] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleChange = (product) => {
    const handleFind = productsAvailable?.find(
      (item) => item?.productName === product?.productName && item?.category === product?.category
    );

    let changedInfo;

    if (handleFind) {
      changedInfo = productsAvailable?.map((item) => {
        return (item.productName === product?.productName && item?.category === product?.category)
          ? product
          : item;
      });
      setProductsAvailable(changedInfo);
      return;
    }

    setProductsAvailable((prev) => [...prev, product]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const objectsArrayFormatted = productsAvailable
        .map(
          (obj) =>
            `Categoría: ${obj.category} Nombre del Producto: ${obj.productName}, Cantidad: ${obj.value}`
        )
        .join("\n");

      emailjs.send(
        import.meta.env?.VITE_SERVICE_ID,
        import.meta.env?.VITE_TEMPLATE_ID,
        {
          user_name: form?.current?.user_name?.value,
          sur_name: form?.current?.sur_name?.value,
          productsAvailable: objectsArrayFormatted,
        },
        import.meta.env?.VITE_PUBLIC_KEY
      );
      console.log("SUCCESS...");
      toast.success("Enviado exitosamente.");
    } catch (error) {
      console.log("FAILED...", error?.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container-xl mt-5">
      <Form ref={form} onSubmit={handleSubmit} className="form mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Surcursal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introducir sucursal"
            name="user_name"
            required
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Comentario">
          <Form.Control
            as="textarea"
            placeholder="Deja un comentario aquí."
            style={{ height: "100px" }}
            name="sur_name"
          />
        </FloatingLabel>

        <Button
          disabled={isLoading}
          className="mt-3 w-100"
          variant="primary"
          type="submit"
        >
          {isLoading ? "Espera un momento..." : "Enviar"}
        </Button>
      </Form>

      <Accordion className="mt-5">
        <Row>
          <IndividualAccordion
            categoryEventKey={0}
            categoryTitle={"CONFITURAS x Kg"}
            categoryProducts={confituras}
            productsAvailable={productsAvailable}
            categoryProduct={"confitura"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={1}
            categoryTitle={"ALFAJORES x Unidad"}
            categoryProducts={alfajores}
            productsAvailable={productsAvailable}
            categoryProduct={"alfajor"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={2}
            categoryTitle={"BUDINES x Unidad"}
            categoryProducts={budines}
            productsAvailable={productsAvailable}
            categoryProduct={"budin"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={3}
            categoryTitle={"PASTAFROLA x Unidad"}
            categoryProducts={pastafrolas}
            productsAvailable={productsAvailable}
            categoryProduct={"pastafrola"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={4}
            categoryTitle={"TARTAS DULCES x Unidad"}
            categoryProducts={tartaDulces}
            productsAvailable={productsAvailable}
            categoryProduct={"tartaDulce"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={5}
            categoryTitle={"TARTAS DULCES CHICAS x Unidad"}
            categoryProducts={tartaDulcesChicas}
            productsAvailable={productsAvailable}
            categoryProduct={"tartaDulceChica"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={6}
            categoryTitle={"PORCIONES"}
            categoryProducts={porciones}
            productsAvailable={productsAvailable}
            categoryProduct={"porcion"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={7}
            categoryTitle={"PANIFICADOS x Unidad"}
            categoryProducts={panificados}
            productsAvailable={productsAvailable}
            categoryProduct={"panificado"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={8}
            categoryTitle={"GALLETAS x Kg"}
            categoryProducts={galletas}
            productsAvailable={productsAvailable}
            categoryProduct={"galleta"}
            handleChange={handleChange}
          />

          <IndividualAccordion
            categoryEventKey={9}
            categoryTitle={"COMIDA x Unidad"}
            categoryProducts={comidas}
            productsAvailable={productsAvailable}
            categoryProduct={"comida"}
            handleChange={handleChange}
          />
        </Row>
      </Accordion>
    </section>
  );
};

export default FormEmail;
