import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import Datascience from '../assets/img/AI services/datascience.webp';
import Ml from '../assets/img/AI services/Ml.jpg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/Services.css";

export const Services = () => {
    const services = [
        // AI Services
        {
          title: "Data Science and Predictive Analytics",
          description:
            "Uncovering insights and forecasting future trends using advanced analytics techniques.",
          category: "AI",
          imgUrl: Datascience,
        },
        {
          title: "Machine Learning Solutions",
          description:
            "Developing algorithms for computers to learn and make decisions based on data.",
          category: "AI",
          imgUrl: Ml
        },
        {
          title: "Advanced Data Analysis",
          description:
            "Extracting meaningful patterns and intelligence from complex datasets.",
          category: "AI",
          imgUrl: "https://www.financialexecutives.org/FEI/media/FEI/Daily/ibm-analytics.jpg",
        },
        {
          title: "Data Engineering Services",
          description:
            "Architecting and optimizing data pipelines for efficient data flow and storage.",
          category: "AI",
          imgUrl: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18134.jpg?w=996&t=st=1703945492~exp=1703946092~hmac=3f3a8a4b7ec250a7a3e4c338d353daf776d79fa6578c709de69c84573ef1a585",
        },
        {
          title: "ML Operations (MLOps)",
          description:
            "Streamlining the machine learning lifecycle from development to deployment and maintenance.",
          category: "AI",
          imgUrl:"https://dce0qyjkutl4h.cloudfront.net/wp-content/uploads/2022/02/ML-Project-life-cycle.jpg",
        },
        {
          title: "Generative AI and Creative Solutions",
          description:
            "Crafting innovative applications using generative models for content creation and design.",
          category: "AI",
          imgUrl:"https://www.latentview.com/wp-content/uploads/2023/07/generative-ai-and-the-evolution-of-llm-models-featured.jpg",
        },
        {
          title: "Intelligent Recommendation Systems",
          description:
            "Designing systems that provide personalized suggestions to users based on their preferences and behaviors.",
          category: "AI",
          imgUrl: "https://miro.medium.com/v2/resize:fit:1200/1*rTZvrFD258ZZwvGy7nyqDw.jpeg",
        },
        {
          title: "AI-Powered Forecasting",
          description:
            "Offering precise demand and trend forecasting for various industries.",
          category: "AI",
          imgUrl: "https://img.freepik.com/free-vector/robot-doing-repeatable-tasks-with-lot-folders-magnifier-robotic-process-automation-service-robots-profit-automated-processing-concept_335657-2111.jpg?w=996&t=st=1703946055~exp=1703946655~hmac=f8bc6536c509d0c5cae9d63585c1399eb90d3b548192e8c4766f01ffd00787ee",
        },
        {
          title: "Anomaly Detection Systems",
          description:
            "Identifying unusual patterns or outliers in data that may indicate critical incidents or opportunities.",
          category: "AI",
          imgUrl: "https://miro.medium.com/v2/resize:fit:1400/1*d6FCZB7TI2L_VRcoYpS_6A.jpeg",
        },
      
        // DevOps Services
        {
          title: "Continuous Integration/Continuous Deployment (CI/CD)",
          description:
            "Streamlining the software release process with automated integration, testing, and deployment pipelines to accelerate time-to-market.",
          category: "DevOps",
          imgUrl:"https://img.freepik.com/free-vector/professional-group-working-project_1262-19870.jpg?w=996&t=st=1703947134~exp=1703947734~hmac=4f6c2aa91a624f61411dd96d0d38b0f691eea21f1898c585c037b605e135619c",
        },
        {
          title: "Automated Deployments",
          description:
            "Implementing reliable, repeatable, and scalable deployment processes to ensure consistent delivery of applications.",
          category: "DevOps",
          imgUrl:"https://www.shutterstock.com/image-vector/devops-engineers-web-design-people-600nw-1918572845.jpg",
        },
        {
          title: "Cloud Optimization Services",
          description:
            "Analyzing and enhancing cloud environments to improve efficiency, reduce costs, and ensure optimal performance.",
          category: "DevOps",
          imgUrl:"https://img.freepik.com/free-vector/cloud-computing-polygonal-wireframe-technology-concept_1017-29594.jpg?w=996&t=st=1703946995~exp=1703947595~hmac=3fff9f7ece6a96b06e8e3fe8380ba6cc748348bdc7910535074ec42265a38a0d",
        },
        {
          title: "Machine Learning Operations (MLOps)",
          description:
            "Integrating ML workflows with DevOps practices to streamline the development, deployment, and maintenance of machine learning models.",
          category: "DevOps",
          imgUrl: Ml,
        },
        {
          title: "Data Warehousing Solutions",
          description:
            "Designing and maintaining centralized repositories for large-scale data storage, analysis, and reporting.",
          category: "DevOps",
          imgUrl:"https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?w=996&t=st=1703946827~exp=1703947427~hmac=402825a3f6c3386302efd28110d8cdddd917e138b98c6b5551479758afc84e03",
        },
        {
          title: "Scaling and Load Balancing Strategies",
          description:
            "Ensuring applications can handle varying loads with dynamic scaling and effective distribution of traffic across resources.",
          category: "DevOps",
          imgUrl:"https://img.freepik.com/free-vector/tiny-business-people-look-product-performance-indicator_335657-2444.jpg?w=996&t=st=1703946885~exp=1703947485~hmac=e17ebd557ef1ceac1ae915e3f6e9449aa005a19c6ae918760a0493b96f89bd28",
        },
        {
          title: "Cloud Monitoring and Management",
          description:
            "Providing real-time visibility into cloud infrastructure to detect and resolve issues promptly, ensuring high availability and performance.",
          category: "DevOps",
          imgUrl:"https://img.freepik.com/free-vector/two-developers-looking-gears-cloud-digital-data-storage-database-securiry-data-protection-cloud-technology-concept-vector-illustration-isolated_335657-2196.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702684800&semt=ais",
        },
        {
          title: "DevOps Consulting and Strategy",
          description:
            "Assisting organizations in adopting DevOps culture, practices, and tools to improve collaboration and efficiency.",
          category: "DevOps",
          imgUrl:"https://static.vecteezy.com/system/resources/previews/003/512/535/non_2x/devops-concept-isolated-software-development-in-team-processes-organization-people-scene-in-flat-cartoon-design-illustration-for-blogging-website-mobile-app-promotional-materials-vector.jpg",
        },
        {
          title: "Cloud Migration Services",
          description:
            "Assisting with the transition of applications, data, and services from on-premises infrastructure to cloud environments.",
          category: "DevOps",
          imgUrl:"https://d2v4wz5vk7guj6.cloudfront.net/wp-content/uploads/2021/07/CD_Cloud_Migration.jpg",
        },
      
        // Web Development - Backend
        {
          title: "API Development Services",
          description:
            "Crafting robust and scalable APIs to facilitate communication between different software components and systems.",
          category: "Web Development - Backend",
        },
        {
          title: "RESTful API Solutions",
          description:
            "Designing and implementing REST APIs for seamless data exchange and integration with web services.",
          category: "Web Development - Backend",
        },
        {
          title: "GraphQL API Implementation",
          description:
            "Delivering efficient and flexible data querying capabilities with GraphQL API development.",
          category: "Web Development - Backend",
        },
        {
          title: "Django Development",
          description:
            "Leveraging the Django web framework for rapid development of secure and maintainable web applications.",
          category: "Web Development - Backend",
        },
        {
          title: "Flask Application Services",
          description:
            "Building lightweight and modular web services using the Flask micro web framework.",
          category: "Web Development - Backend",
        },
        {
          title: "FastAPI Creation",
          description:
            "Utilizing FastAPI for high-performance API development with automatic interactive API documentation.",
          category: "Web Development - Backend",
        },
        {
          title: "Microservices Architecture",
          description:
            "Architecting and deploying independently scalable microservices for complex application ecosystems.",
          category: "Web Development - Backend",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Enabling secure and seamless payment transactions within applications through various payment gateway solutions.",
          category: "Web Development - Backend",
        },
        {
          title: "Scheduled Task Management (Cron Jobs)",
          description:
            "Automating routine tasks and operations through reliable scheduling systems.",
          category: "Web Development - Backend",
        },
        {
          title: "Background Job Processing",
          description:
            "Managing and executing long-running tasks in the background to improve application performance and user experience.",
          category: "Web Development - Backend",
        },
        {
          title: "Caching Strategies",
          description:
            "Implementing caching mechanisms to enhance response times and reduce load on backend systems.",
          category: "Web Development - Backend",
        },
        {
          title: "Database Management",
          description:
            "Offering both SQL and NoSQL database solutions tailored to the specific data storage and retrieval needs of applications.",
          category: "Web Development - Backend",
        },
        {
          title: "Process Automation Services",
          description:
            "Streamlining and automating business processes to increase efficiency and reduce manual intervention.",
          category: "Web Development - Backend",
        },
        {
          title: "Third-Party API Integration",
          description:
            "Seamlessly integrating external services and APIs to extend application functionality and data access.",
          category: "Web Development - Backend",
        },
        {
          title: "Database Design and Optimization",
          description:
            "Structuring and refining databases to ensure data integrity, performance, and scalability.",
          category: "Web Development - Backend",
        },
        {
          title: "Backend Security Practices",
          description:
            "Ensuring the protection of backend systems through security audits, best practices, and compliance with standards.",
          category: "Web Development - Backend",
        },
        {
          title: "Data Migration Services",
          description:
            "Safely transferring data between storage systems, formats, or computing environments.",
          category: "Web Development - Backend",
        },
        {
          title: "Backend Performance Optimization",
          description:
            "Analyzing and improving backend operations to handle high loads and optimize resource usage.",
          category: "Web Development - Backend",
        },
        {
          title: "Real-time Data Processing",
          description:
            "Building systems capable of processing data in real time for applications requiring immediate insights and actions.",
          category: "Web Development - Backend",
        },
        {
          title: "Backend Scalability Solutions",
          description:
            "Creating backends that can adapt and grow with the increasing demands of the business and its users.",
          category: "Web Development - Backend",
        },
      
        // Web Development - Frontend
        {
          title: "React Web Application Development",
          description:
            "Crafting dynamic and responsive single-page applications (SPAs) with React for an engaging user experience.",
          category: "Web Development - Frontend",
        },
        {
          title: "React Component Design",
          description:
            "Creating reusable, maintainable, and scalable UI components that can be shared across different parts of an application or even between services.",
          category: "Web Development - Frontend",
        },
        {
          title: "UI/UX Development",
          description:
            "Designing user interfaces that are both visually appealing and user-friendly, using React to implement the latest UI/UX trends and best practices.",
          category: "Web Development - Frontend",
        },
        {
          title: "Progressive Web App (PWA) Development",
          description:
            "Leveraging React to build PWAs that offer a near-native experience, with offline capabilities and improved performance.",
          category: "Web Development - Frontend",
        },
      
        // QA Services
        {
          title: "Manual Testing Services",
          description:
            "Conducting thorough manual testing of applications to identify bugs, inconsistencies, and usability issues.",
          category: "QA",
        },
        {
          title: "Test Case Development",
          description:
            "Writing detailed test cases that cover all aspects of application functionality to guide the manual testing process.",
          category: "QA",
        },
        {
          title: "Exploratory Testing",
          description:
            "Employing experienced QA professionals to explore applications without predefined test cases, uncovering issues that may not be immediately apparent.",
          category: "QA",
        },
        {
          title: "User Acceptance Testing (UAT)",
          description:
            "Facilitating end-user testing to validate that the application meets business requirements and user expectations before release.",
          category: "QA",
        },
        {
          title: "Cross-Browser Testing",
          description:
            "Ensuring compatibility and consistent performance across various web browsers and versions.",
          category: "QA",
        },
        {
          title: "Mobile Application Testing",
          description:
            "Verifying the functionality, usability, and consistency of mobile applications on different devices and operating systems.",
          category: "QA",
        },
        {
          title: "Usability Testing",
          description:
            "Assessing the application's user interface and user experience to ensure it is intuitive, user-friendly, and aligned with user expectations.",
          category: "QA",
        },
        {
          title: "Regression Testing",
          description:
            "Performing repeated testing of an application after modifications to ensure new code changes have not adversely affected existing functionality.",
          category: "QA",
        },
        {
          title: "Performance Testing",
          description:
            "Evaluating the application's responsiveness, speed, and stability under different load conditions.",
          category: "QA",
        },
        {
          title: "Integration Testing",
          description:
            "Checking the interfaces and interactions between various components of an application to ensure they work together as expected.",
          category: "QA",
        },
        {
          title: "Security Testing",
          description:
            "Identifying potential vulnerabilities in applications that could lead to security breaches.",
          category: "QA",
        },
        {
          title: "Compliance Testing",
          description:
            "Verifying that applications adhere to relevant industry standards, regulations, and accessibility guidelines.",
          category: "QA",
        },
        {
          title: "Test Plan and Strategy Development",
          description:
            "Creating comprehensive test plans and strategies that align with service goals and timelines.",
          category: "QA",
        },
        {
          title: "QA Consulting",
          description:
            "Providing expert advice on best practices in QA and helping to implement effective testing processes.",
          category: "QA",
        },
      ];
      
  return (
    <section className="service" id="ServicesOffered">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Services Offered</h2>
                  <Tab.Container id="services-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Artificial Intelligence
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">DevOps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Backend Development
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Frontend Development</Nav.Link>
                      </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="fifth">QA Services</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {services
                            .filter((service) => service.category === "AI")
                            .map((service, index) => (
                              <ServiceCard key={index} {...service} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {services
                            .filter((service) => service.category === "DevOps")
                            .map((service, index) => (
                              <ServiceCard key={index} {...service} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {services
                            .filter((service) => service.category === "Web Development - Backend")
                            .map((service, index) => (
                              <ServiceCard key={index} {...service} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                      <Row>
                          {services
                            .filter((service) => service.category === "Web Development - Frontend")
                            .map((service, index) => (
                              <ServiceCard key={index} {...service} />
                            ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                      <Row>
                          {services
                            .filter((service) => service.category === "QA")
                            .map((service, index) => (
                              <ServiceCard key={index} {...service} />
                            ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      ></img>
    </section>
  );
};
