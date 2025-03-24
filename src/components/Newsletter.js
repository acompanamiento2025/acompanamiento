import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col } from "react-bootstrap";

export const Newsletter = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const videos = [
    "https://www.youtube.com/embed/JndZ3y-KVLQ?si=HDU-qZCXnDkYlTDV",
    "https://www.youtube.com/embed/0WaYLWDPMB0?si=0h7jxbTz00OnLueY",
    "https://www.youtube.com/embed/dQ1Z3UfraVo?si=2liuoCSY3yyqa8eU",
    "https://www.youtube.com/embed/oMb-65SWRaA?si=K6v89mwCKGmAiN5T",
    "https://www.youtube.com/embed/QjejqtpF5Yg?si=Xrf8xtzN2JRWA8Ba",
    "https://www.youtube.com/embed/mZFzQ1hXD5Q?si=6l7ozkhwXAKMzNvS"
  ];

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" style={{ textAlign: 'center', padding: '30px 0' }}>
        <h3>Videos educativos y de prevención</h3>
        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme video-slider" autoPlay>
          {videos.map((url, index) => (
            <div key={index} className="video-item" style={{ padding: '10px' }}>
              <iframe
                width="100%"
                height="315"
                src={url}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Carousel>
      </div>
    </Col>
  );
};
