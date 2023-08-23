import "./Experience.css";

export default function Experiece() {
  return (
    <div id="experience" className="experience-container">
      <h2 className="title" style={{ marginBottom: "0px" }}>
        Experiences
      </h2>
      <a
        href="https://www.swimsuitsforall.com/"
        target="_blank"
        rel="noreferrer">
        <div className="experience">
          <div className="years-container">
            <h2 className="years">2022 - 2023</h2>
          </div>
          <div className="experience-details">
            <h1>Digital Designer • JBC</h1>
            <h2>New York, NY</h2>
            <p>
              I designed creative pieces for corporate email, web, and marketing
              agendas through implementing client requests, common trends, and
              analyzing past ad performances to generate over $300M in annual
              revenue. I also created and edited digital assets and emails for
              marketing campaigns and supported video projects and aided in
              post-production.
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
            <h1>Digital Design & Content Editor • Community & Content</h1>
            <h2>New York, NY</h2>
            <p>
              I played a pivotal role in campaign development by producing
              creative briefs and storyboards, fostering brand awareness and
              growth; concurrently, I enriched marketing initiatives through the
              creation and editing of digital assets and emails, while also
              providing valuable support across video projects from start to
              post-production stages.
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
              I contributed innovative design concepts and strategic insights
              for contemporary branding by leveraging quantitative analytics and
              observing digital marketing trends; concurrently, I nurtured
              engagement from strategically targeted audiences in line with
              brand guidelines, while crafting compelling on-brand content such
              as descriptions, blogs, and newsletters, employing SEO techniques
              for improved search engine visibility.
            </p>
          </div>
        </div>
      </a>
      <a
        href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:2975092f-6adb-4861-a158-bbea448f4221"
        target="_blank"
        rel="noreferrer">
        <h1 className="view-resume">View Full Resume →</h1>
      </a>
    </div>
  );
}
