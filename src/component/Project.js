import "../css/Project.css";
import Card from "./Card";
import React from "react";
function Project() {
  const Project1 = [
    {
      id: 1,
      h: "E-COMMERCE",
      i: "https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg",
    },
    {
      id: 2,
      h: "BRAND GUIDENESS",
      i: "https://debroome.com/wp-content/uploads/2018/11/logo-guidelines-hero.png",
    },
    {
      id: 3,
      h: "CURRENCY CONVETER",
      i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQH8WdFvj1gT-MBKdkp9V9dxAfEJmCJDw9RUs8Oh58fwzB9JYJONwnySVR3e-M81RFYo&usqp=CAU",
    },
  ];

  return (
    <>
      <div className="project">
        <h1>PROJECT</h1>
        <div className="container1">
          {Project1.map((item) => (
            <Card Project={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Project;
