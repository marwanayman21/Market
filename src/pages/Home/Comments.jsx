import React, { useEffect, useState } from "react";
import { getComments } from "../../APIs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiFillLike } from "react-icons/ai";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newcomments, setNewComments] = useState([]);
  console.log(newcomments);

  const fetchComments = async () => {
    try {
      const data = await getComments();
      const updatedComments = data.map((comment) => ({
        ...comment,
        userImg: `https://randomuser.me/api/portraits/men/${comment.id}.jpg`,
      }));
      setComments(updatedComments);
      setNewComments(updatedComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white w-full py-10 md:py-20">
      <h2 className=" md:text-4xl text-xl font-bold font-serif capitalize md:mx-5 mx-3 md:pb-5 pb-3">
        Customer's Feedback
      </h2>
      <Slider {...settings}>
        {newcomments.map((comment, index) => (
          <div key={index}>
            <div className="bg-primary/10 p-5 md:w-[30vw] w-[90vw] h-[20vh] m-auto flex flex-col justify-evenly relative">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-14 w-10 aspect-square rounded-full"
                  src={comment.userImg}
                  alt={`Profile of ${comment.user.username}`}
                />
                <h4 className="uppercase font-extralight md:text-xs text-[8px] font-serif text-primary">
                  {comment.user.username}
                </h4>
              </div>
              <p className="self-center md:text-xl text-sm">"{comment.body}"</p>
              <div className="absolute md:bottom-3 bottom-2 right-3 md:text-xs text-[10px] flex justify-center items-center gap-1 text-primary">
                <AiFillLike />
                <span>{comment.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
