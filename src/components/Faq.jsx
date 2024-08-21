import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  const data = [
    {
      key:1,
      question:"Consultation",
      answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
   },
    {
      key:2,
      question:"Research and Strategy Development",
      answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
   },
    {
      key:3,
      question:"Implementation",
      answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
   },
    {
      key:4,
      question:"Monitoring and Optimization",
      answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
   },
    {
      key:5,
      question:"Reporting and Communication",
      answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
   },
    {
      key:6,
      question:"Continual Improvement",
      answer:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
   },
  ]
  return (
    <div  className="container  mt-5">
      <Accordion defaultActiveKey="1">
        {data?.map((item) => (
          <Accordion.Item key={item?.key} bsPrefix="custom-accordion-item " eventKey={item?.key}>
          <Accordion.Header bsPrefix="custom-accordion-header d-flex align-items-center ">
            <h3>0{item?.key}</h3> <p className="mt-2 question ms-3 me-1 me-md-4 ms-md-4 fw-bold ">{item?.question}</p>
          </Accordion.Header>
          <Accordion.Body bsPrefix="custom-accordion-body ">
           {item?.answer}
          </Accordion.Body>
        </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
