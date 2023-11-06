import "./Experience.css";

export default function Experiece() {
  return (
    <div id="experience" className="experience-container">
      <h2 className="title" style={{ marginBottom: "0px" }}>
        Experiences
      </h2>
      <a href="https://www.catherines.com/" target="_blank" rel="noreferrer">
        <div className="experience">
          <div className="years-container">
            <h2 className="years">2022 - PRESENT</h2>
          </div>
          <div className="experience-details">
            <h1>Software Engineer I/Frontend UI Developer • JBC</h1>
            <h2>New York, NY</h2>
            <p>
              I engineer and optimize frontend components utilizing modern
              technologies like React.js, HTML5, CSS3, and JavaScript to create
              a visually appealing and intuitive user interface, resulting in a
              20% improvement in page load times and a 15% increase in
              conversion rates. Additionally, I implement responsive and
              user-friendly UI/UX designs to ensure seamless shopping
              experiences across both desktop and mobile platforms, leading to a
              remarkable 25% increase in mobile sales. Furthermore, I
              collaborate closely with backend developers to seamlessly
              integrate and optimize e-commerce functionalities and API
              endpoints, encompassing payment processing, inventory management,
              and order fulfillment, ultimately delivering a seamless and
              efficient shopping experience for customers.
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://www.communityandcontent.com/"
        target="_blank"
        rel="noreferrer">
        <div className="experience">
          <div className="years-container">
            <h2 className="years">2021 - 2022</h2>
          </div>
          <div className="experience-details">
            <h1>Creative Technologist • Community & Content</h1>
            <h2>New York, NY</h2>
            <p>
              I leveraged HTML5, CSS3, and JavaScript to create custom
              interactive features, elevating the overall user experience and
              leading to a notable 30% surge in website engagement.
              Additionally, I designed captivating assets using Adobe Creative
              Suite, integrating Bootstrap, Tailwind CSS, SaaS, and jQuery for
              interactive elements, resulting in an impressive 25% increase in
              user engagement. Furthermore, I employed Adobe XD and Figma for
              prototyping, coupled with React and Git for web development, and
              seamlessly integrated animation and interaction libraries such as
              GSAP to craft dynamic and immersive digital experiences.
            </p>
          </div>
        </div>
        <div className="experience">
          <div className="years-container">
            <h2 className="years">2020 - 2021</h2>
          </div>
          <div className="experience-details">
            <h1>Marketing Coordinator • Community & Content</h1>
            <h2>New York, NY</h2>
            <p>
              I executed and managed marketing campaigns using data-driven
              strategies, incorporating insights gleaned from SQL data analysis,
              and leveraging tools like Google Analytics and SEO techniques to
              refine audience targeting and messaging. Additionally, I employed
              content management systems (CMS) like WordPress to effectively
              update and manage website content, resulting in a notable 20%
              increase in organic search visibility. Furthermore, I analyzed
              heatmap and user behavior data through tools like Hotjar to gain
              valuable insights into user behavior on the website. This led to
              well-informed design decisions and an impressive 50% improvement
              in overall user satisfaction scores.
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:d3e236ec-714b-4525-8b90-8862a8e7c828"
        target="_blank"
        rel="noreferrer">
        <h1 className="view-resume">View Full Resume →</h1>
      </a>
    </div>
  );
}
