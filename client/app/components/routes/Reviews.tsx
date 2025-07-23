import { styles } from "@/app/styles/style";
import Image from "next/image";

type Props = {};
export const reviews = [
  {
    name: "Gene Bates",
    avatar: "",
    profession: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius itaque autem dolorum! Non temporibus, similique sint eveniet nostrum sapiente blanditiis nemo eius nisi excepturi autem tempora, aliquam, porro placeat!",
  },
  {
    name: "John Doe",
    avatar: "",
    profession: "Full Stack Developer | Quarter LTD",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius itaque autem dolorum! Non temporibus, similique sint eveniet nostrum sapiente blanditiis nemo eius nisi excepturi autem tempora, aliquam, porro placeat!",
  },
  {
    name: "Emma Watson",
    avatar: "",
    profession: "Computer Systems Engineering Student | Brazil",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius itaque autem dolorum! Non temporibus, similique sint eveniet nostrum sapiente blanditiis nemo eius nisi excepturi autem tempora, aliquam, porro placeat!",
  },
  {
    name: "Ruth Johnson",
    avatar: "",
    profession: "Junior Web Developer | UK",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius itaque autem dolorum! Non temporibus, similique sint eveniet nostrum sapiente blanditiis nemo eius nisi excepturi autem tempora, aliquam, porro placeat!",
  },
];

const Reviews = ({}: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full ">
          <Image
            src={require("../../../public/assets/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text=[40px] capitalize`}>
            Our students are <span className="text-gradient">Our Stength</span>
            <br /> See what they say about us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab
            rem animi molestiae suscipit quas, ad provident nesciunt voluptas
            architecto sit tenetur inventore quia ex nisi perspiciatis, alias
            officia eaque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
