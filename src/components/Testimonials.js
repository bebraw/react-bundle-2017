import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const TestimonialData = {
    ruturaj: {
        quote:
            "Hey, my friend just got a coding test and it’s in react and she has no react experience. What's the best resource to send her?",
        who: "Ruturaj"
    },
    dave: {
        quote:
            "Your book presents a coherent, reliable workflow. Without it I'm stuck using stack overflow in a disjointed, incorrect mess. Thanks for all your efforts!",
        who: "Dave"
    }
};

const Testimonial = ({ which }) => {
    let { quote, who } = TestimonialData[which];

    return (
        <div itemProp="review" itemScope itemType="http://schema.org/Review">
            <blockquote
                className="col-xs-9 col-xs-offset-1 col-md-7"
                style={{ marginLeft: "25px" }}
            >
                <p itemProp="reviewBody">{quote}</p>
                <small
                    itemProp="author"
                    itemScope
                    itemType="http://schema.org/Person"
                >
                    <span itemProp="name">{who}</span>
                </small>
            </blockquote>
        </div>
    );
};

const CarouselTestimonial = k => (
    <CarouselItem key={k}>
        <Testimonial which={k} />
    </CarouselItem>
);

export const TestimonialsCarousel = ({ keynames, className }) => (
    <Carousel className="row testimonial-carousel">
        {keynames.map(CarouselTestimonial)}
    </Carousel>
);

export default Testimonial;
